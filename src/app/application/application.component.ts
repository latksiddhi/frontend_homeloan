import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

 
  // constructor(private appservice:ApplicationService, private router:Router,private route:ActivatedRoute)
  //  {this.application=new Application(); }

  //  application:any;
  //  customerid:any;
  //  message:any;
  // ngOnInit(): void 
  // {
  //       this.customerid=localStorage.getItem("cid");
  //       console.log(this.customerid);
  // }
  
  // saveData()
  // {
  //   this.customerid=localStorage.getItem("cid");
  //   console.log(this.customerid);   //To fetch customer Id

  //   this.appservice.addApplication(this.application).subscribe((data)=>{
  //   console.log(data);

  //   this.application=data as Application;
  //   localStorage.setItem("aid",this.application.applicationid); //to pass application id
   

  //   this.application=data as Application;
  //   localStorage.setItem("loanamt",this.application.estimatedamount); //to pass estimated amount
  // })
  //   alert("Application saved!");
  // }

  // displayApplication()
  // {
  //   if(this.message!=null)
  //   {
  //     alert("Application has been created of ID: "+this.message.applicationid);
  //     this.application={};
  //   }

 // }
  // Home(){
  //   this.router.navigate(['home']);
  // }

  constructor(private appservice:ApplicationService, private router:Router,private route:ActivatedRoute)
  {this.application=new Application(); }

  application:any;
  custid:any;
  message:any;
 ngOnInit(): void 
 {
       this.application.custid=localStorage.getItem("cid");
       console.log(this.application.custid);
       this.application.loanstatus="Pending";
 }
 
 saveData()
 {
   this.application.custid=localStorage.getItem("cid");
   console.log(this.application.custid);   //To fetch customer Id

   this.appservice.addApplication(this.application).subscribe((data)=>{
   console.log(data);

   this.application=data as Application;
   localStorage.setItem("aid",this.application.applicationid); //to pass application id
  

   this.application=data as Application;
   localStorage.setItem("loanamt",this.application.estimatedamount); //to pass estimated amount
 })
   alert("Your application is saved with Application ID: "+this.application.applicationid);

 }

 Home(){
   this.router.navigate(['home']);
 }
}



