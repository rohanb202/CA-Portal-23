import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
        severity="success"
          action={
            <IconButton
              aria-label="close"
              color="success"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <a href="https://drive.google.com/file/d/1o4WJctcgPhI2q2dZyf_TPQVdIYJbi_6K/view?usp=sharing" target="_blank">CLICK HERE to join the whatsapp group</a> of your respective event! <a href="https://drive.google.com/file/d/1gFcB0q4eN3XhwEzJrx1mmrW6YxvQTcnG/view?usp=sharing" target="_blank"><u>Please find the UPDATED SCHEDULE FOR KASHIYATRA '23 - Day 2 & 3 -  CLICK HERE!</u></a>
        </Alert>
      </Collapse>
    </Box>
  );
}