import { Component, OnInit } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public title: string = "New client";
  public client: Client = new Client();

  constructor() { }

  ngOnInit(): void {
  }

  public create(): void{
    console.log("Clicked");
    console.log(this.client);
  }

}
