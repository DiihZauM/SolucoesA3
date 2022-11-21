import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { UserType } from 'src/Types/User';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  isLogged: Boolean = false;

  crm: string  = '';

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  login(): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;


        const dialogRef = this.dialog.open(LoginComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(
          data => {
            this.crm = data.user.crm
            this.isLogged = data.logged
            console.log(this.crm)
          }
        )
  }
}
