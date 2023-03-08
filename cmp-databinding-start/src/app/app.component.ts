import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test'}]

  constructor() {

  }

  ngOnInit(): void {
  }

  onServerAdded(serverData: {servername: string, serverContent: string}) {
     this.serverElements.push({
       type: 'server',
       name: serverData.servername,
       content: serverData.serverContent
     });
  }

  onBlueprintAdded(blueprintData: {servername: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.servername,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0,1);
  }
}
