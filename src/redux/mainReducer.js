import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp21111077Reducer from '../features/SignUp21111077/redux/reducers'
import SignUp22111076Reducer from '../features/SignUp22111076/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp21111077: SignUp21111077Reducer,
SignUp22111076: SignUp22111076Reducer,

});