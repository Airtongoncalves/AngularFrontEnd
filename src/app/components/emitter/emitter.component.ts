import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {
  number : number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onChangeNumber(){
    this.number = Math.floor(Math.random() * 10)
  }
}
