import { TextMaskModule } from 'angular2-text-mask';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewMemberRegistrationPage } from './new-member-registration';



@NgModule({
  declarations: [
    NewMemberRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(NewMemberRegistrationPage),
    TextMaskModule
  ],
  
})
export class NewMemberRegistrationPageModule {}
