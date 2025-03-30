import React from 'react'
import { Container, Typography, Box, Card, CardContent } from '@mui/material'
import { NavBar } from '../components/NavBar'

const BackgroundImage = 'https://unsplash.com/photos/Oaqk7qqNh_c/download?force=true'

export const Sobre = () => {
  return (
    <div>
      <NavBar />
      <Box
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '64px',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Card elevation={3} sx={{ width: '100%', maxWidth: '600px', borderRadius: '16px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            <CardContent >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '100%' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Sobre
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  Bem-vindo à nossa biblioteca virtual. Aqui você pode cadastrar, editar e listar seus livros favoritos.
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  Nossa missão é fornecer uma plataforma fácil de usar para gerenciar sua coleção de livros.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </div>
  )
}