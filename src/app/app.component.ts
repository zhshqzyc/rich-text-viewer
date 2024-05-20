import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RichTextViewerComponent } from "./rich-text-viewer/rich-text-viewer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RichTextViewerComponent]
})
export class AppComponent {
     htmlText: string = '<strong>This text is important!</strong>' + '<br />' + '<i>This text is italic</i>';
}
