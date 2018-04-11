import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  	// pages;
	  rootPage: string = 'HomePage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


    // set our app's pages
		// this.pages = [
		// 	{ title: 'Home', component: HomePage, icon: 'home' },
			// { title: 'Slides', component: SlideBoxPage, icon: 'swap' },
			// { title: 'Google maps', component: GoogleMapsPage, icon: 'map' },
			// { title: 'Components', component: ComponentsListPage, icon: 'grid' }
		// ];

  }
}

