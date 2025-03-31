import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

export const NavBar = () => {
  const location = useLocation()

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Lista de Livros', path: '/lista-de-livros' },
    { label: 'Adicionar Livro', path: '/cadastrar' },
    { label: 'Sobre', path: '/sobre' }
  ]

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Reading Journal
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? 'white' : 'inherit',
                backgroundColor: location.pathname === item.path ? 'primary.dark' : 'transparent',
                borderRadius: '10px',
                '&:hover': {
                  backgroundColor: location.pathname === item.path ? 'primary.dark' : 'rgba(255, 255, 255, 0.08)'
                }
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}