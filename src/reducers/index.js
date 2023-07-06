import { combineReducers } from "redux";
import { ADD_TASK } from "../actions";


const taskReducers = (state=[], action) => {
    switch (action.type) {
        case ADD_TASK:
            state = state.concat(action.payload)
            break;
        default:
            break;
    }
    return state;
}

const userReducers = () => {

}

const reducers = combineReducers({
   tasks: taskReducers,
   users: userReducers 
})

export default reducers;