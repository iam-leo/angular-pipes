import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public textLower: string = 'tu string';
  public textUpper: string = 'TU STRING';
  public textRare: string = 'Tu StRiNg';
  public templateExpression: string = '';
  public customDate: Date = new Date();
  public dataTable: any[] = [];

  setTemplateExpression(textType: string, pipeType: string) {
    return `{{ ${textType} | ${pipeType} }}`;
  }
}
