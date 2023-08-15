import { useEffect } from 'react'
import {Typography, Button} from "@mui/material"
import {useSelector} from "react-redux"
import useStock from '../hooks/useStock'



const Firms = () => {
   
   const {getFirms} = useStock()
    


    useEffect(() => {
         getFirms();
    }, [])
    const {firms} = useSelector((state) => state.stock) 
    console.log(firms)
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