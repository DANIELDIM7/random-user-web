import { Box } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    
  return ReactDOM.createPortal(
    <Box
      sx={{
        background: "rgba(0,0,0,0.5)",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </Box>,
    document.getElementById("modal")
  );
};
  
export default Modal;
