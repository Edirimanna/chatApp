import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFireModule   } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: AngularFireList<any>;
  name: any;
  msgVal: String = '';

  constructor(public af: AngularFire){ 
    this.item = af.database.list('/message', {
      query: {
         limitTOList: 5
      }
    });
    this.af.auth.subscribe(auth => {
      if(auth){
        this.name =auth;
      }

    })
  }
 
}
