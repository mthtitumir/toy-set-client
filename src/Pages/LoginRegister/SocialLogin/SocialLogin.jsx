import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { auth } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                if (result?.user) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful!',
                        text: 'Logged in Successfully!',
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='mb-5 mx-auto'>
            <button onClick={handleGoogleLogIn}><FaGoogle className='text-5xl text-red-700 border rounded-[50%] p-2 hover:drop-shadow'></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;