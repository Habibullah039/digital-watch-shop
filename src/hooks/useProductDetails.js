import { useEffect } from "react";
import { useState } from "react";

const useProductDetails = productId => {
    const [product, setProduct] = useState({});
    


    useEffect(() => {
        fetch(`http://localhost:5000/classicWatch/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [productId])

    return [product] ;
}

export default useProductDetails ;