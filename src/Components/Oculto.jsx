import React from "react";
import { withWidth, Typography } from "@material-ui/core";

export const Oculto = (props) => {
  return (
    <div>
      <Typography variant="h6" color="primary">
        Ancho: {props.width}
      </Typography>
    </div>
  );
};

export default withWidth()(Oculto);
