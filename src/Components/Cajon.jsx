import React from "react";
import { makeStyles, Drawer, Divider } from "@material-ui/core";
import ListaMenu from "./ListaMenu";

const estilos = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexSrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
}));

export const Cajon = () => {
  const classes = estilos();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
    >
      <div className={classes.toolbar}></div>
      <Divider />
      <ListaMenu />
    </Drawer>
  );
};

export default Cajon;
