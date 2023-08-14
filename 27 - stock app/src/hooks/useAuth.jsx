
import React from 'react'
import axios from "axios"
import { toastSuccess, toastError } from '../helper/ToastNotify'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchStart, loginSuccess, fetchFail } from '../features/authSlice'



const useAuth = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const login = async (userData) => {
        dispatch(fetchStart())
        try {
            const {data} = await axios.post("https://14184.fullstack.clarusway.com/account/auth/login/", userData )
            console.log(data)
            toastSuccess("You have succesfully logged in")
            dispatch(loginSuccess(data))
            navigate("/stock")
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastError("Login failed!")
        }
    }

    const register = async (userData) => {
        try {
            const {data} = await axios.post("http://14184.fullstack.clarusway.com/account/register/", userData )
            console.log(data)
            toastSuccess("You have succesfully registered")
            navigate("/login")
        } catch (error) {
            console.log(error)
            toastError("Registration failed!")
        }
    } 

    return {
        login, register
    }
}

export default useAuth;