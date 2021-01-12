import  LoadThirdRandomDataType from "../Action-Types/LoadThirdRandomDataType";

const LoadThirdRandomDataAction = (payload) => ({
    type: LoadThirdRandomDataType.LOAD_THIRD_RANDOM_DATA,
    payload: payload
});

export default LoadThirdRandomDataAction