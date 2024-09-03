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
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: 'pi pi-sort-numeric-up',
            routerLink: 'numbers',
          },
          { label: 'No comúnes',
            icon: 'pi pi-flag',
            routerLink: 'uncommon'
          },
        ],
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-star',
        items: [
          { label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: 'custom'
          }
        ],
      },
    ];
  }
}
