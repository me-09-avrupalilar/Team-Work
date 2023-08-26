import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {Formik} from "formik";
import { TextField } from "@mui/material";
import useStock from "../hooks/useStock";

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

export default function FirmModal({ setOpen, open, editFirm, setEditFirm }) {
  const handleClose = () => {
    setOpen(false);
    setEditFirm({
      name: "",
      phone: "",
      image: "",
      address: "",
    });
  };
  const { addStocks, editStocks } = useStock();

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
              name: editFirm.name,
              phone: editFirm.phone,
              image: editFirm.image,
              address: editFirm.address,
            }}
            onSubmit={(values, action) => {
              action.resetForm();
              editFirm.id
                ? editStocks("firms", editFirm.id, values)
                : addStocks("firms", values);
              handleClose();
            }}
          >
            {({ handleSubmit, handleChange, values }) => (
              <Box component="Form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Firm Name"
                  name="name"
                  autoFocus
                  onChange={handleChange}
                  value={values.name}
                  required
                />
                <TextField
                  margin="normal"
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  onChange={handleChange}
                  value={values.address}
                  required
                />
                <TextField
                  margin="normal"
                  fullWidth
                  type="tel"
                  id="phone"
                  label="Phone"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                  required
                />
                <TextField
                  margin="normal"
                  fullWidth
                  type="url"
                  id="image"
                  label="Image"
                  name="image"
                  onChange={handleChange}
                  value={values.image}
                  required
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
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
