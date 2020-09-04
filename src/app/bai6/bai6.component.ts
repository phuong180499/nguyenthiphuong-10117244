import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai6',
  templateUrl: './bai6.component.html',
  styleUrls: ['./bai6.component.css']
})
export class Bai6Component implements OnInit {

  constructor() { }
  public tongduong(n:number[]){
    let s=0;
  for(let i=0; i<n.length;i++){
  if(n[i]>=0){
    s+=n[i];
  } else continue;
  }return s;
  }
  tong=0;
  dayso=[-19,-18,-17,-16,-15,-14,-13,-12,-11,0,11,12,13,14,15,16,17,18,19,20]
    ngOnInit(): void {
        this.tong=this.tongduong(this.dayso);
    }
  }