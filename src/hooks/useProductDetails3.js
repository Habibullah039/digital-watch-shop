import { useEffect, useState } from "react";

const useProductDetails3 = specialProductId => {

    const [service , setService] = useState({});

    useEffect(()=> {
        fetch(`https://digital-watch-shopping-server.vercel.app/specialWatch/${specialProductId}`)
        .then(res => res.json())
        .then(data => setService(data) )
    } , [specialProductId])

    return [service]  ;
};

export default useProductDetails3;