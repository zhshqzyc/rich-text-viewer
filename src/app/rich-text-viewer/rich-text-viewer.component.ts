import { Component, Input } from '@angular/core';
import { htmlRegex } from './html-regex.data';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-rich-text-viewer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './rich-text-viewer.component.html',
  styleUrl: './rich-text-viewer.component.scss'
})
export class RichTextViewerComponent {
  public validHtml = '';

  @Input() set htmlText(value: string) {
    const html = this.parseNonEmptyHtml(value);
    const isValidHtml = htmlRegex.test(html);
    this.validHtml = isValidHtml ? html : '';
  }

  private parseNonEmptyHtml(html: string = '') {
    const htmlTags: RegExp = /<[^]*?>/g;
    const hasContent = html.replace(htmlTags, '').trim().length > 0;

    return hasContent ? html : '';
  }
}
