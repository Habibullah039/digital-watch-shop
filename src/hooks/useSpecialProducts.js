import { useEffect, useState } from "react";

const useSpecialProducts = () => {

    const [specialProducts, setSpecialProducts] = useState([]);

    useEffect(() => {
        fetch('https://digital-watch-shopping-server-taanjilahmedtan039-gmailcom.vercel.app/specialWatch')
            .then(res => res.json())
            .then(data => setSpecialProducts(data))
    }, [])

    return [specialProducts]  ;
};

export default useSpecialProducts;