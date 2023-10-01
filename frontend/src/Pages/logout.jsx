import { useToast } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import React from 'react'
import { useDispatch } from 'react-redux';
import { USER_FAIL, VALID_USER_LOGOUT_SUCCESS } from '../Redux/actionTypes';
import { userlogout } from '../Redux/authReducer/action';

export default function Logout() {
    const token = Cookies.get("login_token");
    console.log(token,"Token")
    const toast = useToast();
    const dispatch = useDispatch();
    const handleLogout= (e)=>{
        e.preventDefault()
        dispatch(userlogout(token)).then((res)=>{
            console.log(res.data)
            dispatch({type:VALID_USER_LOGOUT_SUCCESS})
            if(res.data.msg==="User has been logged out"){
                toast({
                    title: `Logged Out Successfully!!`,
                    position: "bottom",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
                Cookies.remove("login_token")
                Cookies.remove("login_email")
                Cookies.remove("login_name")
                Cookies.remove("login_role")
                Cookies.remove("login_avatar");
                window.location.reload();
            }else{
                toast({
                    title: `Something Went Wrong, Try again!!`,
                    position: "bottom",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            }
        }).catch((err)=>{
            dispatch({type:USER_FAIL})
            toast({
                title: `Something Went Wrong, Try again!!`,
                position: "bottom",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        })
    }
  return (
    <div>
        {/* <h1>LOGOUT </h1> */}
        <button onClick={handleLogout}> LOG OUT</button>
    </div>
  )
}
