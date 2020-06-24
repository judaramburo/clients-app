import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public title: string = "New client";
  public client: Client = new Client();

  constructor(private clientService: ClientService,
  private router: Router) { }

  ngOnInit(): void {
  }

  public create(): void{
    this.clientService.create(this.client).subscribe(
      response => this.router.navigate(['/clients'])
    )
  }

}
