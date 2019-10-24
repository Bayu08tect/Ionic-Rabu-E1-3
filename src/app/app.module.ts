import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {HttpClientModule} from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ProdukPage} from '../pages/produk/produk'
import { KeranjangBelanjaPage } from '../pages/keranjang-belanja/keranjang-belanja';
import { AuthProvider } from '../providers/auth/auth';
import { WelcomePage } from '../pages/welcome/welcome';
import { ArtikelPage } from '../pages/artikel/artikel';
import { DetartikelPage } from '../pages/detartikel/detartikel';
import { KomentarPage } from '../pages/komentar/komentar';
import { DetkomentarPage } from '../pages/detkomentar/detkomentar';
import { ApiProvider } from '../providers/api/api';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ProdukPage,
    KeranjangBelanjaPage,
    WelcomePage,
    ArtikelPage,
    DetartikelPage,
    KomentarPage,
    DetkomentarPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ProdukPage,
    KeranjangBelanjaPage,
    WelcomePage,
    ArtikelPage,
    DetartikelPage,
    KomentarPage,
    DetkomentarPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ApiProvider
  ]
})
export class AppModule {}
