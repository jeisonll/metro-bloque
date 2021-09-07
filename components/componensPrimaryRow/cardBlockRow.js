import React, {useEffect, useReducer, useState} from "react";
import Pagination from "../Pagination";
import CardBlock from "./componentPrimary/CardBlock";
import axios from "axios";
import {shoppingInitialState, ShoppingReduce} from "../../redux/reducers/ShoppingReduce";
import { TYPES_CART} from "../../store/actions/ShoppingAction";
import ShoppingCart from "../ShoppingCart";
import products from "../../redux/sagas/products";
import {setProducts} from "../../store/actions/actionProducts";
import {useDispatch, useSelector} from "react-redux";

export default function CardBlockRow(){

    const [productsLocal,setProductsLocal]=useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);
    const [data,setData] = useState(false);
    const state = useSelector(stat => stat.ShoppingReduce);
    const dispatchEvent = useDispatch();
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://fakestoreapi.com/products');
            setProductsLocal(res.data);
             // dispatch({type: TYPES_CART.ADD_DATA, payload:res.data})
            dispatchEvent({type: TYPES_CART.ADD_DATA_DB, payload:res.data})
            setLoading(false);

        };
        fetchPosts();


    }, []);




    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = productsLocal.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    const addCartLocal = (id) => {
        // const productExist = state.cart.find((product) => product.id === id);
        // if (productExist) {
        //     const newMovie: any[] = Object.assign([], movieLocal);
        //     setMovieLocal(newMovie.filter((movie: any) => movieData.id !== movie.id))
        // } else {
        //     const newMovie: any[] = Object.assign([], movieLocal);
        //     newMovie.push(movieData);
        //     setMovieLocal(newMovie);
        // }
        const productExist =cart.find((product) => product.id === id)
        const countProduct= Object.assign([], {product:productExist});
        localStorage.setItem("Shopping Cart", JSON.stringify(productExist));
    }

    console.log(state)

    // useEffect(() => {
    //     // Get the item from local storage. JSON.parse(null) returns null rather than throws
    //     // Get from local storage before setting it
    //     const localTodos = JSON.parse(localStorage.getItem("Shopping Cart")) || [];
    //     dispatchEvent({ type:TYPES_CART.ADD_DATA_CART, payload: localTodos });
    // }, []);


    // useEffect(()=>{
    //
    //         if (state.cart) {
    //             localStorage.setItem("Shopping Cart", JSON.stringify(state.cart || []));
    //         }
    // },[state])



    const addToCart=(id)=>{

        dispatchEvent({type:TYPES_CART.ADD_TO_CART,payload:id})

    }

    // console.log(state)
    return(
        <>

            {currentPosts.map((product) => (

                <CardBlock
                    key={product.id}
                    data={product}
                    addToCard={addToCart}
                />


                )
            )
            }
            <div ><Pagination
                postsPerPage={postsPerPage}
                totalPosts={productsLocal.length}
                paginate={paginate}/>
            </div>
            <style jsx global>
                {`
                  #imageHover:hover #ClassHover {
                    background-color: black !important;

                  }

                  #imagen123 {
                    overflow: hidden;
                  }

                  #imageHover:hover #imagen {
                    transform: scale(1.5);
                    transition: 1s;
                  }

                  @media screen and (max-width: 560px) {
                    .col {
                      width: 100%;
                    }
                  }
                `}


            </style>

        </>
    )
}