
import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { IoBookOutline } from "react-icons/io5"

const Header = () => {
  return (
    <Box
      sx={{ px: 5, py: 2, display: 'flex', alignItems: 'center', gap: 1.5,backgroundColor: '#FFFCF6'}}>
      <Link to="/"
        style={{display: 'flex',alignItems: 'center', gap: '12px', textDecoration: 'none'}}>
        <IoBookOutline
          style={{fontSize: '36px', fontWeight: 700, color: '#E8A00A'}}
        />

        <Typography
          sx={{
            fontSize: '28px',
            fontWeight: 600,
            color: '#E8A00A',
            fontFamily: 'nunito, sans-serif',
            letterSpacing: '0.1px'
          }}
        >
          Course Manager
        </Typography>
      </Link>
    </Box>
  )
}

export default Header
