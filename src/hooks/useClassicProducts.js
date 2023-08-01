import { useEffect, useState } from "react";

const useClassicProducts = () => {

    const [classicProducts, setClassicProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classicWatch')
            .then(res => res.json())
            .then(data => setClassicProducts(data))
    }, [])

    return [classicProducts]  ;
};

export default useClassicProducts;