import React from 'react'
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import GridViewIcon from '@mui/icons-material/GridView';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AppleIcon from "@mui/icons-material/Apple";
import InventoryIcon from "@mui/icons-material/Inventory";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from 'react-router-dom';

const MenuItems = () => {

    const navigate = useNavigate();

    const menuItem = [
      {
        icon: <GridViewIcon />,
        title: "Dashboard",
        path: "/stock",
      },
      {
        icon: <ShoppingCartIcon />,
        title: "Purchases",
        path: "/stock/purchases",
      },
      {
        icon: <MonetizationOnIcon />,
        title: "Sales",
        path: "/stock/sales",
      },
      {
        icon: <LocationCityIcon />,
        title: "Firms",
        path: "/stock/firms",
      },
      {
        icon: <AppleIcon />,
        title: "Brands",
        path: "/stock/brands",
      },
      {
        icon: <InventoryIcon />,
        title: "Products",
        path: "/stock/products",
      },
      {
        icon: <AdminPanelSettingsIcon />,
        title: "Admin Panel",
        path: "/stock/products",
      },
    ];
  return (
    <div>
      <List>
        {menuItem.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={ () => {navigate(item.path)}}>
              <ListItemIcon>
                {item.icon}
                

              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default MenuItems