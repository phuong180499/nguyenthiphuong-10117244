import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})
export class Bai1Component implements OnInit {

  constructor() { }

  s=0;
  n: any;
  x: any;
  ngOnInit(): void {

  }
  tinh(){
    for(let i=1;i<=this.n;++i){
      this.s += Math.pow(this.x,i);
    }
  }
}