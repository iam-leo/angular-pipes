import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public textLower: string = 'prueba';
  public textUpper: string = 'PRUEBA';
  public textRare: string = 'PrUeBa';
  templateExpression: string = '';

  setTemplateExpression(textType: string, pipeType: string) {
    return `{{ ${textType} | ${pipeType} }}`;
  }
}
