import React from "react";
import { Drawer, makeStyles, Typography } from "@material-ui/core";
import Nav from "./Nav";
import Cajon from "./Cajon";

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    marginTop: 70,
  },
  toolbar: theme.mixins.toolbar,
}));

export const Contenedor = () => {
  const classes = estilos();
  return (
    <div className={classes.root}>
      <Nav />
      <Cajon />

      <div className={classes.content}>
        <div className={classes.toolbar}>
          <Typography variant="h6" color="initial">
            CONTENIDO
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Contenedor;
