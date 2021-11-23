import React from "react";
import { Divider, List, ListItem, ListItemText } from "@material-ui/core";

export const ListaMenu = () => {
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Remeras" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Gorras" />
        </ListItem>

        <ListItem button>
          <ListItemText primary="Tabla de Talles" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Como Comprar" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Envíos" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Medios de Pago" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Quienes Somos" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contacto" />
        </ListItem>
      </List>
    </div>
  );
};

export default ListaMenu;
