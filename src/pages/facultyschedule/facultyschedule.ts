import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FacultyschedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facultyschedule',
  templateUrl: 'facultyschedule.html',
})
export class FacultyschedulePage {
  facultyName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.facultyName = navParams.get('facultyMember');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacultyschedulePage');
  }

}
