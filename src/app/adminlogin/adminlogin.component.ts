import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminid?: String;
  pass?: String;
  constructor(private router:Router) { }
  userid:String='admin';
  Password:String='Admin@123';
  ngOnInit(): void {
  }

  Adminlogin(){
    if(this.adminid==this.userid && this.pass==this.Password)
    {
      window.alert("Admin successfully logged in!");
      this.router.navigate(['admin']);
    }
    
  }


  
}
