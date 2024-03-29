import { useEffect, useState } from "react";

const useClassicProducts = () => {

    const [classicProducts, setClassicProducts] = useState([]);

    useEffect(() => {
        fetch('https://digital-watch-shopping-server-iota.vercel.app/classicWatch')
            .then(res => res.json())
            .then(data => setClassicProducts(data))
    }, [])

    return [classicProducts]  ;
};

export default useClassicProducts;