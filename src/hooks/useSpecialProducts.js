import { useEffect, useState } from "react";

const useSpecialProducts = () => {

    const [specialProducts, setSpecialProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/specialWatch')
            .then(res => res.json())
            .then(data => setSpecialProducts(data))
    }, [])

    return [specialProducts]  ;
};

export default useSpecialProducts;