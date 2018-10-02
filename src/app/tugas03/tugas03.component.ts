import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas03',
  templateUrl: './tugas03.component.html',
  // styleUrls: ['./tugas03.component.css']
  styles:[`
        .online {
            color:  white;
        }
    `]
})
export class Tugas03Component implements OnInit {
  log = [];
  allowNewServer = false;
  polinema = "";
  constructor() { }

  ngOnInit() {
  }

  oncreationStatus() {
    if(this.allowNewServer==false){
      this.polinema='Politeknik Negeri Malang';
      this.allowNewServer=true;
    }else{
      this.polinema = "";
      this.allowNewServer=false;
    }
    this.log.push(this.log.length+1);
  }


}
