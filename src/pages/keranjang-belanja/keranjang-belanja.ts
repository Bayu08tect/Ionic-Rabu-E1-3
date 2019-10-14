import { Component } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";

@Component({
  selector: 'page-keranjang-belanja.html',
  templateUrl: 'keranjang-belanja.html'
})

export class KeranjangBelanjaPage{
  produkData: {name: string, quantity: number};

  constructor(private navParams: NavParams,
              private navCtrl: NavController){
    this.produkData = this.navParams.data;
  }
  Beli(){
    this.navCtrl.popToRoot();
  }

}