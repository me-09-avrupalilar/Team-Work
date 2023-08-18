import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { buttonHover } from "/styles/buttonStyle";
import useStock from "../hooks/useStock";

export default function FirmCard({ firm }) {

  const {deleteStocks, editStocks} = useStock();
  return (
    <Card
      sx={{
        height: 350,
        width: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        // padding:"1rem"
        p: 1,
      }}
    >
      <Typography gutterBottom variant="h5" component="div">
        {firm.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {firm.address}
      </Typography>
      <CardMedia
        component={"img"}
        sx={{ height: 140, objectFit: "contain" }}
        image={firm.image}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {firm.phone}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <EditIcon sx={buttonHover} />
        <DeleteOutlineIcon sx={buttonHover} onClick={() => {
          deleteStocks("firms", firm.id)
        }}/>
      </CardActions>
    </Card>
  );
}
