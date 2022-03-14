import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public href: string = "";

    constructor(private router: Router) {}

  ngOnInit(): void {
    this.href = this.router.url;
    console.log(this.href);
  }

}
