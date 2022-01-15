import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private selectedLink: string="calForm";        
  
  setradio(e: string): void   
  {  
  
    this.selectedLink = e;  
          
  }  
  
    isSelected(name: string): boolean   
  {  
  
        if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
            return false;  
          }  
  
      else
       return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
            
 }


  income:number=0;
  loan:number=0;
  rate:number=0.6;
  calculate()
  {
    
    this.loan=60*(this.rate*this.income);
    console.log(this.loan);

  }
  r:String="8.5%";
  principle:number=0;
  rate1:number=0.0070833;  //8.5%= 8.5/100/(12)(Converted into months)
  time:number=0;
  Emi:number=0;


  
  calculateEMI()
  {
    this.Emi=(this.principle*this.rate1*( (Math.pow((1+this.rate1),this.time))/( Math.pow((1+this.rate1),this.time)-1)));
    console.log(Math.pow(2, 4));
  }





  formSubmit1(EMIForm:any)
  {
    console.log(EMIForm.value);
  }
  formSubmit(calForm:any)
  {
    console.log(calForm.value);
  }
}
