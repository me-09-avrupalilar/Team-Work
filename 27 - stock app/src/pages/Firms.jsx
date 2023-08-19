import { useEffect, useState } from 'react'
import {Typography, Button} from "@mui/material"
import {useSelector} from "react-redux"
import useStock from '../hooks/useStock'
import {Grid} from '@mui/material'
import FirmCard from "../components/FirmCard"
import FirmModal from '../components/FirmModal'






const Firms = () => {
   
   const {getStocks} = useStock()
   const [open, setOpen] = useState(false);
   const [editFirm, setEditFirm] = useState({
     name: "",
     phone: "",
     image: "",
     address: "",
   });

    useEffect(() => {
         getStocks("firms");
    }, [])
    const {firms} = useSelector((state) => state.stock) 
    console.log(firms)
  return (
    <>
      <Typography variant="h3" color="red">
        Firms
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "darkblue" }}
        onClick={() => setOpen(true)}
      >
        Add Firm
      </Button>
      <FirmModal
        setOpen={setOpen}
        open={open}
        editFirm={editFirm}
        setEditFirm={setEditFirm}
      />
      <Grid container gap={5} mt={5}>
        {firms?.map((firm) => (
          <Grid key={firm.id}>
            <FirmCard firm={firm} setOpen={setOpen} setEditFirm={setEditFirm} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Firms