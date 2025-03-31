import React, { useState, useEffect } from 'react'
import { Container, Typography, Box, Card, CardContent } from '@mui/material'
import { BookList } from '../components/BookList'
import { NavBar } from '../components/NavBar'
import { getBooks } from '../utils/localStorage'
import { listBooks, removeBook } from '../services/api'
const BackgroundImage = 'https://unsplash.com/photos/Oaqk7qqNh_c/download?force=true'


export const Livros = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await listBooks();
        console.log(data);
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  const handleRemoveBook = async (id) => {
    try {
      await removeBook(id);
      setBooks(books.filter((book) => book.id !== id));
      window.alert('Livro removido com sucesso!');
    } catch (error) {
      console.error(error);
      window.alert('Erro ao remover livro: ' + error.message);
    }
  };

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
                <BookList books={books} removeBook={handleRemoveBook} />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </div>
  )
}