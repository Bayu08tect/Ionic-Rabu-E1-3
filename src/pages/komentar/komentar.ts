import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ApiProvider } from '../../providers/api/api';
import { DetkomentarPage } from '../detkomentar/detkomentar';

@IonicPage()
@Component({
  selector: 'page-komentar',
  templateUrl: 'komentar.html',
})
export class KomentarPage {
  komentars: Observable<any>;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {
    this.komentars = this.apiProvider.getKomentar();
  }
    openDetails(komentar){
      this.navCtrl.push(DetkomentarPage, {people: komentar});
    }

}
