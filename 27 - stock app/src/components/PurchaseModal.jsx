import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import useStock from "../hooks/useStock";
import {MenuItem} from "@mui/material";
import {InputLabel} from "@mui/material";
import {Select} from "@mui/material";
import {FormControl} from "@mui/material";
import { useSelector } from "react-redux";
 

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function PurchaseModal({ open, setOpen, editPurchase, setEditPurchase }) {
  const handleClose = () => {
    setOpen(false);
    setEditPurchase({
      firm_id: "",
      brand_id: "",
      product_id: "",
      quantity: "",
      price: "",
    });
  };
  const { addStocks, editStocks } = useStock();
  const { firms, brands, products } = useSelector((state) => state.stock); 

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={{
              firm_id: editPurchase.firm_id,
              brand_id: editPurchase.brand_id,
              product_id: editPurchase.product_id,
              quantity: editPurchase.quantity,
              price: editPurchase.price,
            }}
            onSubmit={(values, action) => {
              action.resetForm();
              editPurchase.id
                ? editStocks("purchases", editPurchase.id, values)
                : addStocks("purchases", values);
              handleClose();
            }}
          >
            {({ handleSubmit, handleChange, values }) => (
              <Box component="Form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="firm">Firms</InputLabel>
                  <Select
                    name="firm_id"
                    labelId="firm"
                    id="firms"
                    value={values.firm_id}
                    label="firms"
                    onChange={handleChange}
                  >
                    {firms?.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="brand">Brands</InputLabel>
                  <Select
                    name="brand_id"
                    labelId="brand"
                    id="brands"
                    value={values.brand_id}
                    label="brands"
                    onChange={handleChange}
                  >
                    {brands?.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel id="product">Products</InputLabel>
                  <Select
                    name="product_id"
                    labelId="product"
                    id="products"
                    value={values.product_id}
                    label="products"
                    onChange={handleChange}
                  >
                    {products?.map((item) => (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  sx={{ mb: 2 }}
                  fullWidth
                  type="number"
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  onChange={handleChange}
                  value={values.quantity}
                  required
                />
                <TextField
                  sx={{ mb: 2 }}
                  fullWidth
                  type="number"
                  id="price"
                  label="Price"
                  name="price"
                  onChange={handleChange}
                  value={values.price}
                  required
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mb: 2 }}
                >
                  Sumbit Firm
                </Button>
              </Box>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
