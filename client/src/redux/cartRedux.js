import {createSlice} from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import { Snackbar } from "@material-ui/core";
const cartSlice = createSlice({
   name:"cart",
   initialState:{
     products:[],
     quantity:0, 
     total:0,

   },
   reducers:{
       addProduct:(state,action) =>{
           const itemIndex = state.products.findIndex(
            (item) => item._id === action.payload._id
           );
           if (itemIndex >= 0){
             state.products[itemIndex].quantity +=action.payload.quantity;
          
           }else{
             const tempProduct ={...action.payload, ...action.payload.quantity }
             state.products.push(tempProduct);
         
             
           }
           //state.quantity += 1;
           //state.products.push(action.payload);
           //state.total += action.payload.price * action.payload.quantity; 
       },
       ClearCart:(state) =>{
        
        state.products=[];
        state.quantity=0;
        state.total=0;
     
    },
    RemoveFromCart:(state,action)=>{
    const nextCartItems = state.products.filter(
        (products) => products._id !== action.payload._id
    );
    state.products = nextCartItems;
    },
   },
});

export const {addProduct, ClearCart, RemoveFromCart} = cartSlice.actions;
export default cartSlice.reducer;

