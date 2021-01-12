import LoadRandomDataType from '../Actions/Action-Types/loadRandomDataType';
import Random_Data_State from '../State/state'
import  Second_Random_Data_State from '../State/state'
import  Third_Random_Data_State from '../State/state'


const randomDataReducer = (randomState = Random_Data_State, action) => {
    switch (action.type) {
        case LoadRandomDataType.LOAD_RANDOM_DATA:
            
            return {
                ...randomState,
                randomData: action.payload,
            }
    }

    return randomState
}





export  default randomDataReducer;
