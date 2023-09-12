import { useEffect, useState } from "react";

const useModernProducts = () => {

    const [modernProducts, setModernProducts] = useState([]);

    useEffect(() => {
        fetch('https://digital-watch-shopping-server.vercel.app/modernWatch')
            .then(res => res.json())
            .then(data => setModernProducts(data))
    }, [])

    return [modernProducts]  ;
};

export default useModernProducts;