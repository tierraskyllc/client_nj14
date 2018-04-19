import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewMemberRegistrationPage } from './new-member-registration';

@NgModule({
  declarations: [
    NewMemberRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(NewMemberRegistrationPage),
  ],
  
})
export class NewMemberRegistrationPageModule {}
