import React from 'react'
import {Typography, Button} from "@mui/material"
import {useSelector} from "react-redux"
import axios from "axios"


const Firms = () => {
    const {token} = useSelector((state) => state.auth)
    const getFirms = async () => {
        try {
            const {data} = await axios.get("http://14184.fullstack.clarusway.com/stock/firms/", {headers: {Authorization: `Token ${token}`}})
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    getFirms()
  return (
    <>
      <Typography variant="h3" color="red">
        Firms
      </Typography>
      <Button variant="contained" sx={{backgroundColor: "darkblue"}}>Add Firm</Button>


    </>
  );
}

export default Firms