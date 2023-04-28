import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedDialogComponent } from './shared-dialog/shared-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

import { HaqebaPaymentComponent } from './haqeba-payment/haqeba-payment.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { CenterHeaderComponent } from './center-header/center-header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SharedDialogComponent,

    HaqebaPaymentComponent,
    LoaderComponent,
    CenterHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    HttpClientModule
  ],
  exports: [FooterComponent, HeaderComponent , LoaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
