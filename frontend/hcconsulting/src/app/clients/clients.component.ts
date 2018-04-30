import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clientCount: number = 4;
  btnText: string = 'Add Client';
  clientName: string = '';
  clients = [];

  constructor() { }

  ngOnInit() {
    this.clientCount = this.clients.length;
  }

  addClient() {
    this.clients.push(this.clientName);
    this.clientName = '';
    this.clientCount = this.clients.length;
  }

}
