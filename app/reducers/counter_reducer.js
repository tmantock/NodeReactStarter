import { INCREASE } from '../actions/types';
module.exports = function(state = 0, action){
    switch(action.type){
        case INCREASE:
            return state + 1;
    }

    return state;
}