import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  user: {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('userInfo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}
