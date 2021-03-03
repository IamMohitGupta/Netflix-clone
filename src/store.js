import{configureStore} from "@redux/toolkit";
import userReducer from "./userSlice";

export default configureStore({
    reducer:{
    user: userReducer,
},
});