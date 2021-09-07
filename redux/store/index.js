import {applyMiddleware, createStore} from "redux";
import reduxSaga from "redux-saga"
import rootSagas from "../sagas";

function reducers(){
    return{
        testing: ''
    };
}
const sagaMiddleware=reduxSaga();
export default ()=> {
    return {
        ...createStore(reducers, applyMiddleware(sagaMiddleware)),
    runSagas:sagaMiddleware.run(rootSagas)
    }
}