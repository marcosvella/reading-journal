import React, { useState, useEffect } from 'react'
import { TextField, Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getBookById, updateBook } from '../services/api'

export const EditBookForm = ({ id }) => {
  const navigate = useNavigate()
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    date: ""
  })

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookData = await getBookById(id)
        setBook(bookData)
      } catch (error) {
        window.alert('Erro ao carregar dados do livro: ' + error.message)
      }
    }
    fetchBook()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setBook(prevBook => ({
      ...prevBook,
      [name]: value
    }))
  }

  const handleUpdateBook = async (e) => {
    e.preventDefault()
    try {
      await updateBook(id, book)
      window.alert('Livro atualizado com sucesso!')
      navigate('/lista-de-livros')
    } catch (error) {
      window.alert('Erro ao atualizar livro: ' + error.message)
    }
  }

  return (
    <Box component="form" onSubmit={handleUpdateBook} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '100%' }}>
      <TextField label="Insira o título do livro" name="title" value={book.title} onChange={handleChange} fullWidth required />
      <TextField label="Insira o nome do autor" name="author" value={book.author} onChange={handleChange} fullWidth required />
      <TextField label="Insira o gênero do livro" name="genre" value={book.genre} onChange={handleChange} fullWidth required />
      <TextField label="Insira a data de leitura" type="date" name="date" value={book.date} onChange={handleChange} fullWidth required InputLabelProps={{ shrink: true }} />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Atualizar
      </Button>
    </Box>
  )
}