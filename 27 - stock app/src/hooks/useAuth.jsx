
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

    return {
        login
    }
}

export default useAuth