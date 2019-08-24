import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InputDataService } from '../input-data.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.page.html',
  styleUrls: ['./hours.page.scss'],
})
export class HoursPage {
  // tslint:disable-next-line: max-line-length
  constructor(public actionSheetController: ActionSheetController, public socialSharing: SocialSharing, public inputDataService: InputDataService) {}
   async showActionSheet() {
     const actionSheet = await this.actionSheetController.create({
       header: 'Track Hours',
       buttons: [{
         text: 'Add Hours',
         icon: 'add',
         handler: () => {
           console.log('Share clicked');
              /*text: 'Share Hours',
         icon: 'share',
         handler: () => {
           console.log('Share clicked');
           const message = //add hours here
            const subject = 'Shared via Session Tracker';
           this.socialSharing.share(message, subject).then(() => {
      // Success!
      console.log('Shared successfully');
    }).catch(() => {
      // Error!
      console.error('Share was unsuccesful');
    });
  } */
         }
       },
        {
         text: 'Cancel',
         icon: 'close',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }]
     });
     await actionSheet.present();
   }
 }

