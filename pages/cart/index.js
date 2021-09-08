import React, {useState} from "react";
import ShoppingCart from "../../components/ShoppingCart";
import {TYPES_CART} from "../../store/actions/ShoppingAction";
import {useDispatch, useSelector} from "react-redux";
import CardBlockRow from "../../components/componensPrimaryRow/cardBlockRow";

export default function Cart(){
    //state global and dispatch for reducer cart
    const state = useSelector(stat => stat.ShoppingReduce);
    const dispatchEvent = useDispatch();
    const [loading, setLoading]=useState({});
    const [loadingDelete, setLoadingDelete]=useState({});
    //function cart
    const addToCart=(product)=>{
        setLoading({[product.id]:true})
            setTimeout(function(){
                dispatchEvent({type:TYPES_CART.ADD_TO_CART,payload:product});
                setLoading({[product.id]:false});
            }, 3000);

    }
    const clearCart=()=>{
        dispatchEvent({type:TYPES_CART.CLEAR_CART})
    }
    const deleteFromCart=(id,all=false)=>{

        if(all){
            dispatchEvent(({type:TYPES_CART.REMOVE_ALL_FROM_CART,payload:id}))
        }else{
            setLoadingDelete({[id]:true})
                setTimeout(function(){
                    dispatchEvent({type:TYPES_CART.REMOVE_ONE_FROM_CART,payload:id});
                    setLoadingDelete({[id]:false});
                }, 3000);

        }
    }


    //return two col, first col shopping cart and second col card products
    return(
       <div className="container">
           <div className="row">
               <div className="col-12 col-md-8 col-lg-6 mt-5">
                   <ShoppingCart cart={state}
                                 addToCard={addToCart}
                                 clearCart={clearCart}
                                 deleteFromCart={deleteFromCart}
                                 loading={loading}
                                 loadingDelete={loadingDelete}
                   />
               </div>
               <div className="col-12 col-md-4 col-lg-6 mt-5">
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