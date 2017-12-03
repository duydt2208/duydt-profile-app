import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technical-info',
  templateUrl: './technical-info.component.html',
  styleUrls: ['./technical-info.component.css']
})
export class TechnicalInfoComponent implements OnInit {
  @Input() selectedPage: number;

  constructor() { }

  ngOnInit() {
    this.selectedPage = 3;
  }

}
