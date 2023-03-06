import {Component, OnInit} from '@angular/core';
@Component({
   selector: 'app-servers', // element <-- should be use
  // selector: '[app-servers]', // attribute
  // selector: '.app-servers', // class
  templateUrl: './servers.component.html', // template url
  /*template:`             // inline template
    <app-server></app-server>
    <app-server></app-server>
  `,*/
  styleUrls: ['./servers.component.css']  //styles url
  /*styles: [`            // inline style
    h3 {
      color: darkblue;
    }
  `]*/
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was Created!';
  serverName = 'Test Server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
