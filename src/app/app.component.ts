import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from 'ng2-redux/lib/components/ng-redux';
import { IAppState } from './store';
import { CHANGE_PAGE } from './actions';
import { select } from 'ng2-redux';
// import { transition, trigger, state, style, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
  // animations: [
  //   trigger('buttonClickedAnimation', [
  //     state('true', style({
  //       color: 'tomato'
  //     })),
  //     state('false', style({
  //       color: 'black'
  //     })),
  //     transition('true <=> false', animate('200ms ease-in'))
  //   ])
  // ]
})
export class AppComponent implements OnInit {

  @select() selectedPage;


  ngOnInit(): void {
  }
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  changePage(selectedPage: number) {
    this.ngRedux.dispatch({ type: CHANGE_PAGE, selectedPage: selectedPage });
  }

}
