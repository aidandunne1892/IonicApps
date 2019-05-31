import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrivatePageRoutingModule } from './private.router.module';

import { PrivatePage } from './private.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PrivatePageRoutingModule
  ],
  declarations: [PrivatePage]
})
export class PrivatePageModule {}
