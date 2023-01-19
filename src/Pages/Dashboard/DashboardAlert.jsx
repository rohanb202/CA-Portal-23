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
          <a href="https://drive.google.com/file/d/1o4WJctcgPhI2q2dZyf_TPQVdIYJbi_6K/view?usp=sharing" target="_blank">CLICK HERE </a>to join the whatsapp group of your respective event!
        </Alert>
      </Collapse>
    </Box>
  );
}