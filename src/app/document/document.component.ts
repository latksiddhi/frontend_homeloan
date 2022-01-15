import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Document } from '../document';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {


  // constructor(private docservice:DocumentService, private router:Router,private route: ActivatedRoute)
  //    { this.document=new Document();}

  //   document:any;
  //   customerid:any;
  //   message:any;  
    
  //   ngOnInit(): void
  //    {
  //       this.customerid=localStorage.getItem("cid");
  //       console.log(this.customerid);
  //    }

  

  // saveData()
  // {
  //   this.customerid=localStorage.getItem("cid");
  //   console.log(this.customerid);
  //     this.docservice.addDocument(this.document).subscribe(
  //       (data)=>{
  //         console.log(data);
  //       this.message=data })
  //         alert("Document Saved!");
  // }
  // ApplicationDetails(){
    // if(this.message!=null)
    // {
    //   this.router.navigate(['application']);
    // }
    // else{
    //   alert("Please save the details before submitting");
    // }
 // }

 constructor(private docservice:DocumentService, private router:Router,private route: ActivatedRoute)
     { this.document=new Document();}

    document:any;
    custid:number=0;
    message:any;  
    
    ngOnInit(): void
     {  this.document.custid=localStorage.getItem("cid");
     //   this.customerid=localStorage.getItem("cid");
        console.log(this.document.custid);
     }

  

  saveData()
  {
    this.document.custid=localStorage.getItem("cid");
    // this.customerid=localStorage.getItem("cid");
    console.log(this.document.custid);
      this.docservice.addDocument(this.document).subscribe(
        (data)=>{
          console.log(data);
        // this.message=data 
      })
          alert("Document Saved!");
  }
  ApplicationDetails(){
    // if(this.message!=null)
    // {
       this.router.navigate(['application']);
    // }
    // else{
    //   alert("Please save the details before submitting");
    // }
  }




}
