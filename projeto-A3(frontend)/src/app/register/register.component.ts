import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommunicationService } from 'src/Services/communication.sevices';
import { UserType } from 'src/Types/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userForm:FormGroup; 
  name: string = ''
  lastName: string = ''
  birthDate: string = ''
  gender: string = ''
  crm: string = ''
  password: string = ''

  constructor(
    private commservice : CommunicationService,
    private fb: FormBuilder
    ) {
      this.userForm = this.fb.group({
        name: '',
        email: '',
        age: '',
        gender: '',
        crm: '',
        password: ''
      });
  
     }

  ngOnInit(): void {
  }

  register(): void {
    let user = {
    "name" : this.userForm.get('name')?.value,
    "age" : this.userForm.get('birthDate')?.value,
    "gender" : this.userForm.get('gender')?.value,
    "crm" : this.userForm.get('crm')?.value,
    "password" : this.userForm.get('password')?.value} as UserType
    this.commservice.register(user).subscribe()
  }

}
