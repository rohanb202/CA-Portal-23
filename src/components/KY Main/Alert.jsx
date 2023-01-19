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
        severity="error"
          action={
            <IconButton
              aria-label="close"
              color="danger"
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
          Registration for Kashiyatra '23 closing today! Hurry up and register so that you don't miss out! To view the events schedule - <a href="https://drive.google.com/file/d/1xb8z2ZU1hMCv1rjhio6JzvajDRtnWUmD/view?usp=sharing" target="_blank"><u>CLICK HERE!</u></a>
        </Alert>
      </Collapse>
    </Box>
  );
}