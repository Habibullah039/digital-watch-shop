import { useEffect, useState } from "react";

const useModernProducts = () => {

    const [modernProducts, setModernProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/modernWatch')
            .then(res => res.json())
            .then(data => setModernProducts(data))
    }, [])

    return [modernProducts]  ;
};

export default useModernProducts;