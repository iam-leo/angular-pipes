import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``,
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-sparkles',
        items: [
          { label: 'Textos y Fechas', icon: 'pi pi-align-left' },
          { label: 'Números', icon: 'pi pi-sort-numeric-up' },
          { label: 'No comúnes', icon: 'pi pi-flag' },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-star',
        items: [{ label: 'Otro elemento', icon: 'pi pi-cog' }],
      },
    ];
  }
}
