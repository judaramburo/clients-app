import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public title: string = "New client";
  public client: Client = new Client();

  constructor(private clientService: ClientService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.showClient();
  }

  showClient(): void {
    this.activateRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.clientService.getClient(id).subscribe(client => this.client = client)
      }
    })
  }

  public create(): void{
    this.clientService.create(this.client).subscribe(
      client => {
        this.router.navigate(['/clients'])
        swal.fire('New client', `Client ${client.firstName} created correctly`, 'success')
      }
    )
  }

  public update(): void{
    this.clientService.update(this.client).subscribe(
      client => {
        this.router.navigate(['/clients'])
        swal.fire('Client updated', `Client ${client.firstName} updated correctly`, 'success')
    })
  }

}
