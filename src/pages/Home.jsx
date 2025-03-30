import React from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import AddBoxIcon from '@mui/icons-material/AddBox'

const BackgroundImage = 'https://unsplash.com/photos/Oaqk7qqNh_c/download?force=true'

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Box
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 4,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
              textAlign: 'center'
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              Bem-vindo à Biblioteca
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Gerencie seus livros de forma simples e prática
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, marginTop: 2, justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/cadastrar"
                startIcon={<AddBoxIcon />}
                sx={{ borderRadius: 2, boxShadow: 3 }}
              >
                Cadastrar Livro
              </Button>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/lista-de-livros"
                startIcon={<LibraryBooksIcon />}
                sx={{ borderRadius: 2, boxShadow: 3 }}
              >
                Ver Livros
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  )
}