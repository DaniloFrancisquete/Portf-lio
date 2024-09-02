import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'java',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/java.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'python',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/python.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'react',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/react.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'docker',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/docker.svg')
    );

  }

}
