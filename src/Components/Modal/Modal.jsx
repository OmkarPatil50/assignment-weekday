import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function JobModal({ open, setOpen, modalData }) {
  const handleClose = () => setOpen((prev) => ({ ...prev, open: false }));

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className="flex-center modal-heading">Job Description</h2>
          <Typography id="modal-modal-title" variant="p" component="p">
            {modalData}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
