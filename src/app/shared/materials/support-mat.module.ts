import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [],
  providers: []

})
export class SupportMaterialModule { }
