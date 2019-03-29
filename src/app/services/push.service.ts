import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal ) {}

    configInicialOneSignal(){

      this.oneSignal.startInit('85ded559-d165-4e58-a77d-e3f8ca355424','1038960959773');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe((noti) => {

      // una notificacion es recibida
      console.log('Notificacion recibida,', noti);

      });

      this.oneSignal.handleNotificationOpened().subscribe((noti) => {

        //una notificacion es abierta
        console.log('Notificacion abierta,', noti);

      });

      this.oneSignal.endInit();
  }
 

}
