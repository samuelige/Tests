import LoadThirdRandomDataType from "../Actions/Action-Types/LoadThirdRandomDataType";
import Third_Random_Data_State from "../State/thirdState";

const thirdRandomDataReducer = (thirdRandomState = Third_Random_Data_State, action) => {
    switch (action.type) {
        case LoadThirdRandomDataType.LOAD_THIRD_RANDOM_DATA: 
            return {
                ...thirdRandomState,
                thirdRandomData : action.payload
            }
    }
    return thirdRandomState
};

export default thirdRandomDataReducer;