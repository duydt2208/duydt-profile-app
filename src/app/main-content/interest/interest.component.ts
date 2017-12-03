import { Component, OnInit, Injectable, Input, Output } from '@angular/core';
import { InterestService } from '../../service/interest.service';
import { Interest } from '../../model/Interest';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  interests: Interest[];

  constructor(private _interestService: InterestService) {
  }

  ngOnInit() {
    this.interests = this._interestService.getListInterest();
  }

}
