import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DaftarPage } from '../daftar/daftar';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }
  halamanprofile(){
    this.navCtrl.push(DaftarPage);
  }
}