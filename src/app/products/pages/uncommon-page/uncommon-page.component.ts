import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Leonel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }


  changeClient():void{
    this.name = 'Daniela';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Lionel', 'Rodrigo', 'Leandro', 'Angel', 'Julián', 'Lautaro', 'Emiliano'];
  public clientsMap = {
    '=0': 'No hay ningún usuario en espera.',
    '=1': 'Un usuario en espera ...',
    'other': 'Hay # usuarios en espera ...'

  }

  deleteClient():void{
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Lionel Messi',
    age: 37,
    country: 'Argentina'
  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap: ', value))
  ) // Cada 2 seg emite un valor. Ej 1.. 2.. 3..

  public myPromise: Promise<string> = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })
}
