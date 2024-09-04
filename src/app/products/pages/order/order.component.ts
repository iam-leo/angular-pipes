import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Iron Man',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Captain America',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Thor',
      canFly: true,
      color: Color.yellow
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Black Widow',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Hawkeye',
      canFly: false,
      color: Color.yellow
      },
    {
      name: 'Doctor Strange',
      canFly: false,
      color: Color.green
      },
      {
        name: 'Black Panther',
        canFly: false,
        color: Color.red
        },
    {
      name: 'Loki',
      canFly: false,
      color: Color.yellow
      }
  ]

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrderBy( value: keyof Hero):void {
    this.orderBy = value;
    console.log(value)
  }

}
