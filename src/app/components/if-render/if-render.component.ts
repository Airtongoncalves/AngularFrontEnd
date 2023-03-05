import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.scss']
})
export class IfRenderComponent implements OnInit {
  canshow : boolean = false;
  name = 'Matheus'
  constructor() { }

  ngOnInit(): void {
  }

}
