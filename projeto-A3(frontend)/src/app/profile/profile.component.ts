import { Component, OnInit } from '@angular/core';
import { UserType } from 'src/Types/User';
import { CommunicationService } from 'src/Services/communication.sevices';
import { of, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {} as UserType;
  userId: string = ''
  constructor(
    private commService: CommunicationService,
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => this.userId = params['crm']
      );
      this.commService.requestUser(this.userId).subscribe(
        (data) =>
        this.user = data 
        );
  }
  
}
