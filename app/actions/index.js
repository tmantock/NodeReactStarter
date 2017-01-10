import axios from 'axios';
import { INCREASE } from './types';

export function increment() {
    return function(dispatch) {
        dispatch({ type: INCREASE });
    }
}
