import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatButtonModule, MatToolbarModule, MatToolbarRow } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class AppMaterialModule { }
