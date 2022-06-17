import { Button, Typography } from "@mui/material";
import { DialogBody, DialogCreate, DialogFooter } from "components/Dialog";
import React from "react";
import { useDispatch } from "react-redux";
import { closeAndReset } from "store/board";

export const PostCreate = ({ open }) => {
  const dispatch = useDispatch();
  const onClose = () => dispatch(closeAndReset());

  return (
    <DialogCreate open={open} control={onClose} title="發文" maxWidth="md">
      <DialogBody sx={{ width: "100%" }}>
        <Typography variant="body1" color="#F2F2F7">
          友善發文風氣從你我做起
        </Typography>
      </DialogBody>
      <DialogFooter>
        <Button label="Cancel" onClick={onClose} />
        <Button label="Create" />
      </DialogFooter>
    </DialogCreate>
  );
};
