import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  public form ={
    email:null,
    password:null
  }
  ngOnInit() {
  }
  onSubmit(){
    return this.http.post('http://rummy.aremok.com/api/login',this.form).subscribe(
      data => console.log(data),
      error =>console.log(error)
    );
  }
}
