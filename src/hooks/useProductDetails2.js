import { useEffect, useState } from "react";

const useProductDetails2 = modernProductId => {

    const [service , setService] = useState({});

    useEffect(()=> {
        fetch(`https://digital-watch-shopping-server.vercel.app/modernWatch/${modernProductId}`)
        .then(res => res.json())
        .then(data => setService(data) )
    } , [modernProductId])

    return [service]  ;
};

export default useProductDetails2;