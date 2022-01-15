import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../application';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-loanstatus',
  templateUrl: './loanstatus.component.html',
  styleUrls: ['./loanstatus.component.css']
})
export class LoanstatusComponent implements OnInit {
  l1:Application=new Application();
  lx=new Array<Application>();
  applicationid:number=0;
  status?:String;
  constructor(private applicationService:ApplicationService, private router:Router) { }

  ngOnInit(): void {
  }

  loanStatus(){
    this.applicationService.findApplication(this.applicationid).subscribe
      (
        (data:any)=>{
        console.log(data);
        this.l1=data as Application;
        this.lx.push(this.l1);
        console.log(this.l1.loanstatus);
        this.status=this.l1.loanstatus; })
 
  }
}
