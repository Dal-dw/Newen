import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function SwitchTheme({ changeTheme }) {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    changeTheme();
  };

  return (
    <div className="d-flex m-1">
      ☼
      <Form.Check
        type="switch"
        id="custom-switch"
        className="mx-1"
        onChange={handleChange}
      />
      ☾
    </div>
  );
}
