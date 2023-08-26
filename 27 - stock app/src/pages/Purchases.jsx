import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import PurchaseModal from "../components/PurchaseModal";


import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { GridActionsCellItem} from "@mui/x-data-grid";
import useStock from "../hooks/useStock";





export default function Purchases() {

  const {deleteStocks} = useStock();

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "createds",
      headerName: "Date",
      width: 150,
      editable: true,
    },
    {
      field: "firm",
      headerName: "Firm",
      width: 150,
      editable: true,
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 110,
      editable: true,
    },
    {
      field: "product",
      headerName: "Product",
      width: 160,
      editable: true,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      width: 160,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 160,
      editable: true,
    },
    {
      field: "price_total",
      headerName: "Amount",
      type: "number",
      width: 160,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem icon={<EditIcon />} label="Delete" />,
        <GridActionsCellItem
          icon={<DeleteOutlineIcon />}
          label="Delete"
          onClick={() => deleteStocks("purchases", params.id)}
          
        />,
      ],
    },
  ];

 const { getStocks } = useStock();
 const {purchases} = useSelector((state) => state.stock );
 
 const [open, setOpen] = useState(false);
 const [editPurchase, setEditPurchase] = useState({
   firm_id: "",
   brand_id: "",
   product_id: "",
   quantity: "",
   price: "",
 });


  useEffect(() => {
    getStocks("brands");
    getStocks("firms");
    getStocks("products")
    getStocks("purchases")

  }, [])

  console.log("purchases: ",  purchases)
  return (
    <>
      <Typography variant="h3" color="red">
        Purchases
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "darkblue" }}
        onClick={() => setOpen(true) }
      >
        New Purchase
      </Button>
      <PurchaseModal open = {open} setOpen = {setOpen} editPurchase={editPurchase} setEditPurchase={setEditPurchase}/>
      <Box sx={{ height: 400, width: "100%", mt:5}}>
        <DataGrid
          rows={purchases}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}
