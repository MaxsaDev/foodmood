import React from 'react';
import {Pages} from "@mui/icons-material";
import {Box} from "@mui/material";

const PageTemplate = ({pageTemplate}) => {
  return (
    <Pages
      sx={{
        border: '1px red solid',
        width: '100%',
        height: '100%'
      }}
    >
      <Box>
        {pageTemplate}
      </Box>
    </Pages>
  );
};

export default PageTemplate;