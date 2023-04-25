import { Component, ViewChild } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
 defaultCountry = 'SriLanka';

  



 

  firstname:string='';
  lastname: string='';
  email_add: string='';
  gen!: string;
  country!: string;
  phonenumber!:string;
  pwd:string='';
  cpwd:string='';
  dob!:string;
  address!:string;

  defaultGender = 'Female';

  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ]
  
  @ViewChild('myForm')
  form!: NgForm;

  showMsg: boolean = false;

  onSubmit(){
    console.log(this.form);

    this.firstname = this.form.value.personDetails.firstname;
    this.lastname = this.form.value.personDetails.lastname;
    this.email_add = this.form.value.personDetails.email_add;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;
    this.pwd=this.form.value.personDetails.pwd;
    this.phonenumber=this.form.value.personDetails.phonenumber;
    this.dob=this.form.value.dob;
    this.address=this.form.value.address;
    this.showMsg= true;

    this.form.reset();
  }

  setDefaultValues(){
    // this.form.value.personDetails.firstname = 'John';
    // this.form.value.personDetails.lastname = 'smith';
    // this.form.value.personDetails.email = 'abc@example.com';
    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personDetails: {
    //     firstname: 'John',
    //     lastname: 'Smith',
    //     email: 'abc@example.com'
    //   }
    // })

    this.form.form.patchValue({
      personDetails: {
         firstname: 'John',
         lastname: 'Smith',
         email: 'abc@example.com'
      }
    })
  }
}
