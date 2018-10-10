import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController } from 'ionic-angular';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()


@Component({

    templateUrl: 'landing.html'
})

export class LandingPage {

  constructor(app: App, menu: MenuController, public navCtrl: NavController, public navParams: NavParams) {
    menu.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }
}


@Component({

  template: `

<ion-content padding>

  <button>page one</button>

</ion-content>
`

})

export class PageOne {
  constructor(public navCtrl: NavController) {
  }
  PageOne(params) {
    this.navCtrl.push(`

<ion-content padding>

  <button>page one</button>

</ion-content>
`);
  }}



@Component({

  template: `

<ion-header>

  <ion-navbar>

    <button ion-button menuToggle icon-only>

      <ion-icon name='menu'></ion-icon>

    </button>

    <ion-title>

      Friends

    </ion-title>

  </ion-navbar>

</ion-header>

<ion-content padding>

  <button ion-button block menuToggle>Toggle Menu</button>

</ion-content>

`

})

export class PageTwo { }



@Component({

  template: `

<ion-header>

  <ion-navbar>

    <button ion-button menuToggle icon-only>

      <ion-icon name='menu'></ion-icon>

    </button>

    <ion-title>

      Events

    </ion-title>

  </ion-navbar>

</ion-header>

<ion-content padding>

  <button ion-button block menuToggle>Toggle Menu</button>

</ion-content>

`

})

export class PageThree { }
