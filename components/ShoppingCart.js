import {useEffect} from "react";
import {TYPES_CART} from "../store/actions/ShoppingAction";
import {useDispatch, useSelector} from "react-redux";

export default function  ShoppingCart ({addToCard,clearCart,deleteFromCart}) {

    const state = useSelector(stat => stat.ShoppingReduce);
    const dispatchEvent = useDispatch();


    useEffect(() => {

        // Get the item from local storage. JSON.parse(null) returns null rather than throws
        // Get from local storage before setting it
        const localTodos = JSON.parse(localStorage.getItem("Shopping Cart")) || [];
        dispatchEvent({ type:TYPES_CART.ADD_DATA_CART, payload: localTodos });
    }, []);
    useEffect(()=>{

        if (state.cart) {
            localStorage.setItem("Shopping Cart", JSON.stringify(state.cart || []));
        }
    },[state])



    return(
    <>
        <h2>Shopping Cart</h2>
        <h3>Products</h3>
        <button className="btn btn-secondary" onClick={clearCart}>Clear Cart</button>
        {state.cart.map((product)=>(

<>

            <div key={product.id} className="card mb-3" style={{maxWidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={product.image} className="img-fluid rounded-start" alt="producto"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <button onClick={()=>deleteFromCart(product.id,true)} className="btn btn-close end-50"style={{marginLeft:"93%"}}/>
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">${product.price}.00</small></p>
                            <p className="card-text">Total ${product.price*product.quantity}.00</p>

                            <button onClick={()=>addToCard(product)} className="btn btn-primary">add other</button>
                            <button onClick={()=>deleteFromCart(product.id)} className="btn btn-secondary">delete one</button>

                        </div>
                    </div>
                </div>

            </div>
</>
        ))}
        <div><h2 className="display-2">total a pagar ${state.total}.00</h2></div>
    </>
)}
