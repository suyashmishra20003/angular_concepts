import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernameValue:string
  passwordValue:string

  constructor(
    private authService:AuthService,
    private router:Router,
    private activeRoute:ActivatedRoute,
  ){}
  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((data)=>{
      const logout = Boolean(data.get('logout'));
      if(logout){
        this.authService.logOut();
        alert(`You are not logged out. isLogged = ${this.authService.isLogged}`);
      }
    })
  }

  onLoginClicked(event){
    // event.preventDefault()
    const user = this.authService.login(this.usernameValue,this.passwordValue)
    
    if (user === undefined) {
      alert('This login credentials you have entered is not correct ')
    }else{
      alert(`Welcome ${user.name}. You are logged in.`);
      this.router.navigate(['/Courses'])
    }
  
  }
}
