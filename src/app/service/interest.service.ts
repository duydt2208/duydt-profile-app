import { Injectable } from '@angular/core';
import { Interest } from '../model/Interest';
import { InterestData } from '../data/InterestData';

@Injectable()
export class InterestService {

  constructor() { }

  getListInterest(): Interest[] {
    return InterestData;
  }

}
