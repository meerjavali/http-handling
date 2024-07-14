import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = 'angular-forms';
  flag=false;
  ngOnInit(): void {
    
  }

  constructor(private http:HttpClient){}


  handleSubmit(userForm: any) {
    console.log('submittedData', userForm, userForm.value);
    this.http.post('https://ng-http2-792cb-default-rtdb.firebaseio.com/user.json', {...userForm.value, date:new Date().toLocaleDateString()})
    .subscribe((res)=>{
      console.log(res);
    })
    this.flag=true;
  }
}
