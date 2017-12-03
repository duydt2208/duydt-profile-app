import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.css']
})
export class ProfessionalInfoComponent implements OnInit {

  @Input() selectedPage: number;

  constructor() { }

  ngOnInit() {
    this.selectedPage = 2;
  }

}
