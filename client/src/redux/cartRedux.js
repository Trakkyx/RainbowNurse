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
           state.quantity += 1
           //state.products.push(action.payload);
           state.total += action.payload.price; 
       },
       ClearCart:(state) =>{
        
        state.products=[];
        state.quantity=0;
        state.total=0;
     
    },
    RemoveFromCart:(state,action)=>{
      const itemIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
       );
       state.total -= state.products[itemIndex].quantity * state.products[itemIndex].price
       state.quantity -=  state.products[itemIndex].quantity
       

      
    const nextCartItems = state.products.filter(
        (products) => products._id !== action.payload._id
    );

    state.products = nextCartItems;
    },
    decreaseCart(state,action){
      const itemIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
       );
      if(state.products[itemIndex].quantity > 1){
        state.total -= state.products[itemIndex].price;
        state.quantity -= 1;
        
        state.products[itemIndex].quantity -= 1;
      }else if (state.products[itemIndex].quantity){

        state.total -= state.products[itemIndex].price;
        state.quantity -= 1;
        const nextCartItems = state.products.filter(
          (products) => products._id !== action.payload._id
        );
        state.products = nextCartItems;
       
      
      }
    },
    increaseCart(state,action){
      const itemIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
       );
        state.products[itemIndex].quantity += 1;
        state.quantity += 1;
      
        state.total += state.products[itemIndex].price; 
      },
    getTotals(state,action){
      let {total, quantity} = state.products.reduce
      ((productTotal,products)=>{
        const { price, productQuantity} = products;
        const itemTotal = price * productQuantity;

        productTotal.total += itemTotal
        productTotal.quantity += productQuantity

        return productTotal; 
      },
      {
        total:0,
        quantity:0,
      }
      );
      state.quantity = quantity;
      state.total = total;
    }
      
   },
});

export const {addProduct, ClearCart, RemoveFromCart, decreaseCart, increaseCart, getTotals} = cartSlice.actions;
export default cartSlice.reducer;

