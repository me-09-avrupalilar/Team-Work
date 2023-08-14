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

const MenuItems = () => {
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
    ];
  return (
    <div>
      <List>
        {menuItem.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
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