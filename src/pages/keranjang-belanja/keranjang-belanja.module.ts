import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KeranjangBelanjaPage } from './keranjang-belanja';

@NgModule({
  declarations: [
    KeranjangBelanjaPage,
  ],
  imports: [
    IonicPageModule.forChild(KeranjangBelanjaPage),
  ],
})
export class KeranjangBelanjaPageModule {}
