import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  exports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,

  ],
  declarations: [],
  providers: []

})
export class TeachersMaterialModule { }
