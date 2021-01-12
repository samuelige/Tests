import  LoadSecondRandomDataType from "../Action-Types/LoadSecondRandomDataType";

const LoadSecondRandomDataAction = (payload) => ({
    type: LoadSecondRandomDataType.LOAD_SECOND_RANDOM_DATA,
    payload: payload
})

export default LoadSecondRandomDataAction;