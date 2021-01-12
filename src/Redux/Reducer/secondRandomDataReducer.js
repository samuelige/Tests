import LoadSecondRandomDataType from "../Actions/Action-Types/LoadSecondRandomDataType";
import Second_Random_Data_State from "../State/secondState";

const secondRandomDataReducer = (secondRandomState = Second_Random_Data_State, action) => {
    switch (action.type) {
        case LoadSecondRandomDataType.LOAD_SECOND_RANDOM_DATA:
            
            return {
                ...secondRandomState,
                secondRandomData: action.payload,
            }
    }
    
    return secondRandomState
};

export default secondRandomDataReducer;