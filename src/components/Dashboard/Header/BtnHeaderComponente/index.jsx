import Modal from "@mui/material/Modal";
import React from "react";
import { Box } from "@mui/material";

import {
  ButtonHeader,
  Style,
  Strong,
  DivButtons,
  ButtonModal,
  ButtonModalBlue,
} from "./styles";

export const BtnHeaderComponente = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ButtonHeader onClick={handleOpen}>
        <i className="las la-plus"></i>
        <p> Nova Jornada </p>
      </ButtonHeader>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Style}>
          <h3>Nova Jornada</h3>
          <hr />
          <p>
            Dê um <Strong> nome </Strong> para essa Jornada
          </p>
          <input type="text" />
          <h4> Você poderá alterar essa informação depois. </h4>
          <DivButtons>
            <ButtonModalBlue> Continuar </ButtonModalBlue>
            <ButtonModal onClick={handleClose}> Cancelar </ButtonModal>
          </DivButtons>
        </Box>
      </Modal>
    </>
  );
};
