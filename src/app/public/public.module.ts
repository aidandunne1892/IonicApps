import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicPageRoutingModule } from './public.router.module';

import { PublicPage } from './public.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PublicPageRoutingModule
  ],
  declarations: [PublicPage]
})
export class PublicPageModule {}
