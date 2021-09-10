import React, {useEffect, useState} from "react";
import Pagination from "../Pagination";
import CardBlock from "./componentPrimary/CardBlock";
import axios from "axios";
import {TYPES_CART} from "../../store/actions/ShoppingAction";
import {useDispatch, useSelector} from "react-redux";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function CardBlockRow() {

    //hook useState
    const [productsLocal, setProductsLocal] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingButton, setLoadingButton] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    const state = useSelector(stat => stat.ShoppingReduce);
    const dispatchEvent = useDispatch();

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = productsLocal.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


    //useEffect http request products and dispatch add data for products in reducer
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://fakestoreapi.com/products');
            setProductsLocal(res.data);
            dispatchEvent({type: TYPES_CART.ADD_DATA_DB, payload: res.data})
            setTimeout(function(){setLoading(false); }, 5000);
        };
        fetchPosts();
    }, []);
    // Get the item from local storage. JSON.parse(null) returns null rather than throws
    // Get from local storage before setting it
    useEffect(() => {
        const localTodos = JSON.parse(localStorage.getItem("Shopping Cart"));
        dispatchEvent({type: TYPES_CART.ADD_DATA_CART, payload: localTodos});
    }, []);


    //set item from local storage
    useEffect(() => {
        if (state.cart) {
            localStorage.setItem("Shopping Cart", JSON.stringify(state.cart || []));
        }
    }, [state.cart])

    //dispatch product for setting it
    const addToCart = (product) => {
        setLoadingButton({[product.id]:true})
            setTimeout(function (){
                dispatchEvent({type: TYPES_CART.ADD_TO_CART, payload: product})
                setLoadingButton({[product.id]:false});
            },3000)
    }


    return (
        <>{!loading?
            <>

                {currentPosts.map((product) => (
                        <CardBlock
                            key={product.id}
                            data={product}
                            addToCard={addToCart}
                            loadingButton={loadingButton}
                        />
                ))}

            <div className="mt-5 ">
                <Pagination
                postsPerPage={postsPerPage}
                totalPosts={productsLocal.length}
                paginate={paginate}/>
            </div>

        </>:<FontAwesomeIcon className="fa-spin fa-10x d-block mx-5" icon={faSpinner} style={{color: "darkgray"}}/>}


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