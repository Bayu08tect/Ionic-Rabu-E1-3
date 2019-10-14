import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KeranjangBelanjaPage } from '../keranjang-belanja/keranjang-belanja';

@IonicPage()
@Component({
  selector: 'page-produk',
  templateUrl: 'produk.html',
})
export class ProdukPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdukPage');
  }
  Beli(produkData:{name: string, quantity: number}){
    this.navCtrl.push(KeranjangBelanjaPage, produkData);
  }

}
