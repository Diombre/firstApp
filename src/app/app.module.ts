import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing'
import { DepartmentPage } from '../pages/department/department';
import { HelpPage } from '../pages/help/help';
import {AboutPage} from '../pages/about/about';
import {TabsPage} from '../pages/tabs/tabs';
import {SchedulePage} from '../pages/schedule/schedule';
import {FacultyschedulePage} from '../pages/facultyschedule/facultyschedule';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    DepartmentPage,
    HelpPage,
    AboutPage,
    TabsPage,
    SchedulePage,
    FacultyschedulePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    DepartmentPage,
    HelpPage,
    AboutPage,
    TabsPage,
    SchedulePage,
    FacultyschedulePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
