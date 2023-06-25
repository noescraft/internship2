import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';


function Login() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [regiserPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [logingPassword, setLoginPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail, 
                regiserPassword
                );
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => { };

    const logout = async () => { };

    return (
        <div className=' sticky top-1 float-right items-center pr-3 font-semibold flex justify-start sm:gap-4 mt-4'>
            
            
            <input placeholder='Email...' onChange={(event) => {
                setRegisterEmail(event.target.value);
            }}
                className='p-2 rounded-full mr-2 pr-[--20px] border-radius: 30px' />
            <input placeholder='Password...' onChange={(event) => {
                setRegisterPassword(event.target.value);
            }} className='p-2 rounded-full mr-2 pr-[--20px]' />
            <button onClick={register} className='flex items-center text-white 
    bg-[#ff5a60] hover:bg-white hover:text-[#ff5a60]
     duration-200 ease-out gap-5 py-1 px-3 sm:px-3 rounded-full text-[14px] sm:text-[16px]'>
                Login
            </button>
        </div>

    )
}

export default Login; 