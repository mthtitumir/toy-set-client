import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const {user} = useContext(AuthContext);
    const {email, name} = user;

    console.log(user);
    useEffect(()=>{
        fetch(`http://localhost:5500/toys?seller_email=${email}`)
        .then(res => res.json())
        .then(data => setMyToys(data))
        .catch(error => console.log(error))
    }, [])
    console.log(myToys);
    return (
        <div>
            All of my toys here
        </div>
    );
};

export default MyToys;