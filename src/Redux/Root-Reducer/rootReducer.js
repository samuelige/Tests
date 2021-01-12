import { combineReducers } from "redux";
import randomDataReducer from "../Reducer/randomDataReducer";
import secondRandomDataReducer from "../Reducer/secondRandomDataReducer";
import thirdRandomDataReducer from "../Reducer/thirdRandomDataReducer";


const rootReducer = combineReducers({
    randomData : randomDataReducer,
    secondRandomData : secondRandomDataReducer,
    thirdRandomData : thirdRandomDataReducer
})

export default rootReducer