import { Store } from 'redux';
import { CHANGE_PAGE } from './actions';

export interface IAppState {
    selectedPage: number;
}

export const INITIAL_STATE: IAppState = {
    selectedPage: 1
};

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case CHANGE_PAGE:
            return { selectedPage: action.selectedPage };
    }
    return state;
}
