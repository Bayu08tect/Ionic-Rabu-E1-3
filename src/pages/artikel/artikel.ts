import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from '../../providers/api/api';
import { DetartikelPage } from '../detartikel/detartikel';

@IonicPage()
@Component({
  selector: 'page-artikel',
  templateUrl: 'artikel.html',
})
export class ArtikelPage {
  artikels: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.artikels = this.apiProvider.getArtikel();
    
  }

  openDetails(artikel){
    this.navCtrl.push(DetartikelPage, {film: artikel});
  }


}
