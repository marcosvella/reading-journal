import React, { useState, useEffect } from 'react'
import { Container, Typography, Box, Card, CardContent } from '@mui/material'
import { BookList } from '../components/BookList'
import { NavBar } from '../components/NavBar'
import { getBooks } from '../utils/localStorage'

const BackgroundImage = 'https://unsplash.com/photos/Oaqk7qqNh_c/download?force=true'


export const Livros = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const books = getBooks()
    if (books) {
      setBooks(books)
    }
  }, [])

  return (
    <div>
      <NavBar />
      <Box
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: 4,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Container sx={{ marginTop: 4 }}>
          <Card elevation={3} sx={{ width: '100%', maxWidth: '1200px', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            <CardContent sx={{ height: '80vh', overflowY: 'auto' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Lista de Livros
                </Typography>
                <BookList books={books} removeBook={(title) => setBooks(books.filter(book => book.title !== title))} />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </div>
  )
}