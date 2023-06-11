import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string ="";
  password: string ="";
 
 
  constructor(private router: Router,private http: HttpClient) {}
 
 
  Login() { 
    
    const bodyData = {
      name: this.name,
      password: this.password,
    };
        this.http.post("http://localhost:8080/login", bodyData).subscribe(  (resultData:any) => {
        console.log(resultData);
        console.log(this.name);
        console.log(this.password);
        if (resultData.message == "User does not exist")
        {
      
          alert("User not exits");
    
        }
        else if(resultData.message == "Login Success")
    
         {
          this.router.navigateByUrl('/home');
        }
        else
        {
          alert("Incorrect User and Password not match");
        }
 
      });
    }
}
