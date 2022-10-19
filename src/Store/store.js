import {createStore} from 'redux';
import { signOut } from '../Redux/userAction';
import userReducer from '../Redux/userReducer';




const store = createStore(userReducer);

export default store;

