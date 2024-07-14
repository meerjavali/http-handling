import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private http:HttpClient) { }
  response:any;
  ngOnInit(): void {
  
    this.http.get('https://ng-http2-792cb-default-rtdb.firebaseio.com/user.json').pipe(map(res=>{
      const postArray=[];
      for(let obj in res){
        postArray.push({...res[obj], key:obj});

      }
      return postArray;

    })).
    subscribe(res=>{
       // {}
       console.log(res);
       this.response=res;
       

    })
  }
  handle(key){

  }
}
