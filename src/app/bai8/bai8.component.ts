import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai8',
  templateUrl: './bai8.component.html',
  styleUrls: ['./bai8.component.css']
})
export class Bai8Component implements OnInit {

  constructor() { }
  chieucao: any;
  dientich: any;
  ketqua: any;
  ngOnInit(): void {

  }
  tinh(){
    this.ketqua= (this.chieucao*this.dientich)/3;
  }

}

