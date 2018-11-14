import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { LandingPage } from '../landing/landing';
import { TabsPage } from '../tabs/tabs';
import { SchedulePage } from '../schedule/schedule';
import { User } from '../../Model/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as User;
  constructor(private afAuth: AngularFireAuth , public navCtrl: NavController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {

  }
  gotoAnotherPage(params) {
    //check in the database
    this.navCtrl.setRoot(SchedulePage);
  }
  async login( user: User ){
    if( !user.email || !user.password ){
      let toast = this.toastCtrl.create({
        message: 'Please Enter your Email and Password!',
        duration: 3000,
        position: 'middle'
      });
      toast.present();
    }else{
      this.afAuth.auth.signInWithEmailAndPassword( user.email , user.password )
      .then((result)=>{
        let toast = this.toastCtrl.create({
          message: 'Successfully Logged-in',
          duration: 3000,
          position: 'top'
        });
        toast.present();
        console.log(result);
        this.navCtrl.setRoot(SchedulePage, {'userInfo': result.user});
      })
      .catch((error)=>{
        let toast = this.toastCtrl.create({
          message: 'Incorrect Email or Password',
          duration: 3000,
          position: 'middle'
        });
        toast.present();

        console.log(error);    
      });
    }
    console.log('Logged in');
  }
}
