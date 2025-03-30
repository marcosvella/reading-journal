import React, { useState, useEffect } from 'react'
import { TextField, Button, Box, CardMedia } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getBook, updateBook } from '../utils/localStorage'

export const EditBookForm = ({ id }) => {
  const navigate = useNavigate()
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    date: "",
    imageUrl: ""
  })

  useEffect(() => {
    const book = getBook(id)
    if (book) {
      setBook(book)
    }
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setBook(prevBook => ({
      ...prevBook,
      [name]: value
    }))
  }

  const handleUpdateBook = (e) => {
    e.preventDefault()
    try {
      updateBook(id, book)
      window.alert('Livro atualizado com sucesso!')
      navigate('/lista-de-livros')
    } catch (error) {
      window.alert(error.message)
    }
  }

  return (
    <Box component="form" onSubmit={handleUpdateBook} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '100%' }}>
      <Box sx={{ 
        width: '100%',
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '1rem' 
        }}>
        <CardMedia
          component="img"
          image={book.imageUrl ? book.imageUrl : "https://placehold.co/200.png"}
          alt="Capa do livro"
          sx={{ width: 'auto', height: '200px' }}
        />
      </Box>
      <TextField label="Insira o título do livro" name="title" value={book.title} onChange={handleChange} fullWidth />
      <TextField label="Insira o nome do autor" name="author" value={book.author} onChange={handleChange} fullWidth />
      <TextField label="Insira o gênero do livro" name="genre" value={book.genre} onChange={handleChange} fullWidth />
      <TextField label="Insira a data de leitura" type="date" name="date" value={book.date} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} />
      <TextField label="Insira um link para capa do livro (opcional)" type="url" name="imageUrl" value={book.imageUrl} onChange={handleChange} fullWidth />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Atualizar
      </Button>
    </Box>
  )
}