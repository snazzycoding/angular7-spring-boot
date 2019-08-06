import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbLayoutModule, NbActionsModule } from '@nebular/theme';
import { NbThemeModule } from '@nebular/theme';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { OneColumnComponent } from './one-column/one-column.component';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, OneColumnComponent],
  exports: [FooterComponent, HeaderComponent, OneColumnComponent],
  imports: [
    CommonModule,
    NbThemeModule,
    NbLayoutModule,
    NbActionsModule
  ]
})
export class LayoutModule { }
