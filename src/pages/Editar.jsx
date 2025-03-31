import React, { useEffect } from 'react'
import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { EditBookForm } from '../components/EditBookForm'

const BackgroundImage = 'https://unsplash.com/photos/Oaqk7qqNh_c/download?force=true'

export const Editar = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!id) {
      navigate('/')
    }
  }, [id, navigate])

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
        <Container sx={{ marginTop: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Card elevation={3} sx={{ width: '100%', maxWidth: '600px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            <CardContent >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '100%' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Editar Livro
                </Typography>
                {id ? (
                  <EditBookForm id={id} />
                ) : (
                  <>
                    <Typography variant="body1" component="p">
                      Nenhum ID fornecido. Redirecionando para a página inicial...
                    </Typography>
                    <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                      Voltar para a Página Inicial
                    </Button>
                  </>
                )}
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </div>
  )
}