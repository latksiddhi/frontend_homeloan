import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Calulate(){
    this.router.navigate(['calculator']);
  }
  Signup(){
    this.router.navigate(['customer']);
  }
  Login(){
    this.router.navigate(['login']);
  }
  FAQ()
  {
    this.router.navigate(['faq']);
  }
  AboutUs()
  {
    this.router.navigate(['aboutus']);
  }
}