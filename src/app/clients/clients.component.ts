import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      clients => this.clients = clients
    )
  }

  delete(client: Client): void {
    swal.fire({
      title: 'Are you sure?',
      text: `Are you sure you want to delete client ${client.firstName} ${client.lastName}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {

        this.clientService.delete(client.id).subscribe(
          response => {
            this.clients = this.clients.filter(cli => cli !== client)
            swal.fire(
              'Deleted!',
              'Client has been deleted.',
              'success'
            )
          }
        )
      }

    })
  }

}
