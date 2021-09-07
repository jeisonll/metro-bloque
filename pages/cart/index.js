import React, {useEffect, useReducer, useState} from "react";
import ShoppingCart from "../../components/ShoppingCart";
import {shoppingInitialState, ShoppingReduce} from "../../redux/reducers/ShoppingReduce";
import {TYPES_CART} from "../../store/actions/ShoppingAction";
import {useDispatch, useSelector} from "react-redux";
import CardBlock from "../../components/componensPrimaryRow/componentPrimary/CardBlock";
import CardBlockRow from "../../components/componensPrimaryRow/cardBlockRow";

export default function Cart(){

    const state = useSelector(stat => stat.ShoppingReduce);
    const dispatchEvent = useDispatch();
    // useEffect(() => {
    //     // Get the item from local storage. JSON.parse(null) returns null rather than throws
    //     // Get from local storage before setting it
    //     const localTodos = JSON.parse(localStorage.getItem("Shopping Cart")) || [];
    //     dispatchEvent({ type:TYPES_CART.ADD_DATA_CART, payload: localTodos });
    // }, []);
    // useEffect(()=>{
    //
    //     if (state.cart) {
    //         localStorage.setItem("Shopping Cart", JSON.stringify(state.cart || []));
    //     }
    // },[state])
    const addToCart=(product)=>{

        dispatchEvent({type:TYPES_CART.ADD_TO_CART,payload:product})

    }
    const clearCart=()=>{
        dispatchEvent({type:TYPES_CART.CLEAR_CART})
    }
    const deleteFromCart=(id,all=false)=>{
        if(all){
            dispatchEvent(({type:TYPES_CART.REMOVE_ALL_FROM_CART,payload:id}))
        }else{
            dispatchEvent({type:TYPES_CART.REMOVE_ONE_FROM_CART,payload:id})
        }
    }
    return(
       <div className="container">
           <div className="row">
               <div className="col-12 col-md-8 col-lg-6">
                   <h2>cat Shopping</h2>
                   <h2>{}</h2>

                   <ShoppingCart cart={state}
                                 addToCard={addToCart}
                                 clearCart={clearCart}
                                 deleteFromCart={deleteFromCart}
                   />
               </div>
               <div className="col-12 col-md-4 col-lg-6">
                   <h2>Shopping</h2>
                   <h2>{}</h2>
                   <div className="row justify-content-center d-none d-md-flex row-cols-md-1 row-cols-lg-2 mx-5 mx-md-0 mx-lg-0 ">

                   <CardBlockRow/>
                   </div>
               </div>

           </div>
       </div>
   )
}