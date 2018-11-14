import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HelpPage} from '../help/help';
import {AboutPage} from '../about/about';
// import {HomePage} from "../home/home";
import {LandingPage} from '../landing/landing';


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  splash = true;

  constructor(public navCtrl: NavController, public NavParams: NavParams) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;

    }, 6000);
  }

landingPage = LandingPage;
aboutPage = AboutPage;
helpPage = HelpPage;

}