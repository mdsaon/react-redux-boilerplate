import { FETCH_USER_LIST } from '../actions/types';

const initialState = {
    users:[
        {
            name:"Saidur",
            email:"swesaon@gmail.com",
            country:"Bangladesh",
        },
        {
           name:"Rahman",
           email:"swesaon@gmail.com",
           country:"Finland",
       },
       ],
   };
export default function(state=initialState,action) {
    switch(action.type){
        case FETCH_USER_LIST:
        return {
            ...state,
        }
        default:
        return state;
    }
}