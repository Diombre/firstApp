import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingPage } from '../landing/landing'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash = true;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;

    }, 4000);
  }
  gotoAnotherPage(params) {
    this.navCtrl.setRoot(LandingPage);
  }
}
