import React, {useEffect, useState} from "react";
import Pagination from "../Pagination";
import CardBlock from "./componentPrimary/CardBlock";
import axios from "axios";
export default function CardBlockRow(){

    const [products,setProducts]=useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://fakestoreapi.com/products');
            setProducts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);




    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);



    return(
        <>
            {currentPosts.map((product) => (
                    <div className="col mt-3 text-center " key={product.id}>
                        <div className="row ">
                            <CardBlock
                                title={product.title}
                            image={product.image}
                            category={product.category}
                            price={product.price}

                            />

                        </div>

                    </div>
                )
            )
            }
            <div ><Pagination
                postsPerPage={postsPerPage}
                totalPosts={products.length}
                paginate={paginate}/>
            </div>


        </>
    )
}