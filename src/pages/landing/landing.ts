import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController } from 'ionic-angular';
import { DepartmentPage } from '../department/department';
import { HomePage } from '../home/home';
import { FacultyschedulePage } from '../facultyschedule/facultyschedule';
/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()


@Component({
    selector: 'page-home',
    templateUrl: 'landing.html'
})

export class LandingPage {

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public NavParams: NavParams) {
    this.initializeItems();
  }
  initializeItems() {
    this.items = [
      'Bryan',
      'Williams',
      'Rosemary',
      'Roy',
      'Xue',
      'Effort'
    ];
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  gotoDepartmentPage(departarpments) {
    //check in the database
    console.log(departarpments);
    this.navCtrl.push(DepartmentPage , {'departmentValue': departarpments});    
  }
  
  gotoFacultySchedule(facultyMember) {
    //check in the database
    console.log(facultyMember);
    this.navCtrl.push(FacultyschedulePage , {'facultyMember': facultyMember});    
  }

  gotoAnotherPage(params) {
    //check in the database
    this.navCtrl.setRoot(HomePage);
  }
}
