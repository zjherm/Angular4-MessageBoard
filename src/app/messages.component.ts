import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'messages',
	template: `
		<div *ngFor="let message of webService.messages">
			<md-card class="card">
				<md-card-title [routerLink]="['/messages', message.owner]">{{message.owner}}</md-card-title>
				<md-card-content>{{message.text}}</md-card-content>
			</md-card>
		</div>`
})

export class MessagesComponent {

	constructor(
		private webService: WebService, 
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		var name = this.route.snapshot.params.name;
		this.webService.getMessages(name);
	}
	
}