import { useEffect, useState } from "react";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signOut } from "firebase/auth";

const useOrders = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {

        const getOrders = async () => {

            const email = user.email;

            try {
                const { data } = await axios.get(`https://digital-watch-shopping-server-taanjilahmedtan039-gmailcom.vercel.app/order?email=${email}`, {

                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setOrders(data);
            }

            catch (error) {

                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('token');
                    navigate('/login');

                }
            }

        }

        getOrders();


    }, [])


    return [orders , setOrders]  ;
};

export default useOrders;