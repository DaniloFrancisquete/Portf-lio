import { Component, inject, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout'
import { filter, fromEvent, map, pipe } from 'rxjs';
import { menuItems } from './shared/models/menu';
import { MenuItem } from './shared/models/menuItem';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

const routeNameMapping: { [key: string]: string } = {
  'painel': 'Painel',
  'apresentacao': 'Apresentação',
  'cursos': 'Cursos',
  'experiencias': 'Experiências',
  'formacao': 'Formação Acadêmica',
  'projeto': 'Projetos'
};

export const SCROOL_CONTAINER = 'mat-sidenav-content ';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  public isSmallScreen = false;
  public popText = false;
  public applyShadow = false;
  public items_menu: MenuItem[] = menuItems;
  public menuName = '';
  private breakpointObserver = inject(BreakpointObserver);
  private route = inject(Router);
  private activatedRoute = inject(ActivatedRoute)



ngOnInit(): void {
    const content = document.getElementsByClassName(SCROOL_CONTAINER) [0];

    fromEvent(content, 'scroll')
    .pipe(map(() => content.scrollTop))
    .subscribe((value: number) => this.determineHeader(value))

    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const routePath = this.activatedRoute.firstChild?.snapshot.routeConfig?.path ?? '';
        this.menuName = routeNameMapping[routePath] || routePath;
    });
}

determineHeader(scrollTop: number) {
  this.popText = scrollTop >= TEXT_LIMIT;
  this.applyShadow = scrollTop >= SHADOW_LIMIT;
}

  ngAfterContentInit(): void {
    this.breakpointObserver
    .observe(['(max-width: 800px)'])
    .subscribe((res) => this.isSmallScreen = res.matches);
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }


}
