import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad HomePage');
  // }

  videoBackgroundPage(): void {
    this.navCtrl.push('VideoBackgroundPage')
  };

  memberLoginPage(): void {
    this.navCtrl.push('LoginPage')
  };

  newMemberRegistrationPage(): void {
    this.navCtrl.push('NewMemberRegistrationPage')
  };

}
