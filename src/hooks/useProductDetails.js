import { useEffect, useState } from "react";

const useProductDetails = productId => {

    const [product , setProduct] = useState({});

    useEffect(()=> {
        fetch(`https://digital-watch-shopping-server-iota.vercel.app/classicWatch/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data) )
    } , [productId])

    return [product]  ;
};

export default useProductDetails;