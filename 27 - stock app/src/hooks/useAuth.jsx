
import React from 'react'
import axios from "axios"
import { toastSuccess, toastError } from '../helper/ToastNotify'


const useAuth = () => {
    const login = async (userData) => {
        try {
            const {data} = await axios.post("https://14184.fullstack.clarusway.com/account/auth/login/", userData )
            console.log(data)
            toastSuccess("You have succesfully logged in")

        } catch (error) {
            console.log(error)
            toastError("Login failed!")
        }
    }

    const register = async (userData) => {
        try {
            const {data} = await axios.post("http://14184.fullstack.clarusway.com/account/register/", userData )
            console.log(data)
            toastSuccess("You have succesfully registered")

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