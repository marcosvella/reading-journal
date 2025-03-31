import React from 'react'
import { Container, Typography, Box, Card, CardContent } from '@mui/material'
import { BookForm } from '../components/BookForm'
import { NavBar } from '../components/NavBar'

const BackgroundImage = 'https://unsplash.com/photos/Oaqk7qqNh_c/download?force=true'

export const Cadastro = () => {
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
        <Container>
          <Card elevation={3} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Cadastro de Livros
                </Typography>
                <BookForm />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </div>
  )
}