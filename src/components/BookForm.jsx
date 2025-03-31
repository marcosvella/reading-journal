import { useState } from "react"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom';

import { addBook } from '../services/api'

export const BookForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  const [readAt, setReadAt] = useState("")

  const handleRegisterBook = async (e) => {
    e.preventDefault()

    const book = { title, author, genre, readAt }
    try {
      await addBook(book)
      window.alert('Livro adicionado com sucesso!')

      setTitle("")
      setAuthor("")
      setGenre("")
      setReadAt("")

      navigate('/lista-de-livros')
    } catch (error) {
      window.alert(error.message)
    }
  }

  return (
    <Box component="form" onSubmit={handleRegisterBook} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: 2 }}>
      <TextField label="Insira o título do livro" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth required />
      <TextField label="Insira o nome do autor" value={author} onChange={(e) => setAuthor(e.target.value)} fullWidth required />
      <TextField label="Insira o gênero do livro" value={genre} onChange={(e) => setGenre(e.target.value)} fullWidth required />
      <TextField label="Insira a data de leitura" type="date" value={readAt} onChange={(e) => setReadAt(e.target.value)} fullWidth required InputLabelProps={{ shrink: true }} />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Cadastrar
      </Button>
    </Box>
  )
}