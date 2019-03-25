import { createStore } from 'redux';


var initialState={
    counter:0
}
var reducer = (state=initialState,action)=>{
    console.log(action);
    if(action.type=="INC"){
        return {
            ...state,
            counter:state.counter + action.value
        }
    }
    return state
}

var store = createStore(reducer);

export default store;