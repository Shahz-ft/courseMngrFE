
import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{
        py: 3,
        textAlign: 'center',
        borderTop: '1px solid #eee9df',
        backgroundColor: '#E8A00A'
      }}
    >
      <Typography
        sx={{
          fontSize: '13px',
          color: '#FFFFFF'
        }}
      >
        © 2026 Course Manager. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
