import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Previewdetails } from '../previewdetails';

@Component({
  selector: 'app-profiledashboard',
  templateUrl: './profiledashboard.component.html',
  styleUrls: ['./profiledashboard.component.css']
})
export class ProfiledashboardComponent implements OnInit {

  constructor(private customerService:CustomerService,private router:Router) { }
  cd1:Previewdetails=new Previewdetails();
  // cdx=new Array<Previewdetails>();
  customerid:number=0;
  cuId:any;
  details:any;

  ngOnInit(): void {
    this.cuId=localStorage.getItem("cuID") as string;
    console.log(this.cuId);
    

    this.searchbycustomerid(this.cuId);
  }


  logout(){
    localStorage.removeItem("cuID");
    this.router.navigate(['login']);
  }
 
  searchbycustomerid(id?:any)
  {
  
    this.customerService.searchbycustomerid(id).subscribe
    (
      (data:any)=>{
      console.log(data);
      this.cd1=data;
      // this.cdx.push(this.cd1);
      console.log(this.cd1);
      }
    )
  }
}
