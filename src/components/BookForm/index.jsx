import { useState } from "react"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

import { addBook } from '../../utils/localStorage'

// Nova URL de placeholder para a capa do livro
const placeholderCoverURL = "https://placehold.co/100.png"

export const BookForm = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [genre, setGenre] = useState("")
  const [date, setDate] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const HandleRegisterBook = (e) => {
    e.preventDefault()

    const book = {
      title, author, genre, date, imageUrl
    }
    try {
      // Tenta adicionar livro e avisa o usuário sobre status
      addBook(book)
      window.alert('Livro adicionado com sucesso!')

      setTitle("")
      setAuthor("")
      setGenre("")
      setDate("")
      setImageUrl("")
    }
    catch (error) {
      window.alert(error.message)
    }
  }

  return (
    <Box component="form" onSubmit={HandleRegisterBook} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: 2 }}>
      <TextField label="Insira o título do livro" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
      <TextField label="Insira o nome do autor" value={author} onChange={(e) => setAuthor(e.target.value)} fullWidth />
      <TextField label="Insira o gênero do livro" value={genre} onChange={(e) => setGenre(e.target.value)} fullWidth />
      <TextField label="Insira a data de leitura" type="date" value={date} onChange={(e) => setDate(e.target.value)} fullWidth InputLabelProps={{ shrink: true }} />
      <TextField label="Insira um link para capa do livro (opcional)" type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} fullWidth />
      <Box sx={{ marginBottom: 2, textAlign: 'center', width: '100%' }}>
        <img
          src={imageUrl || placeholderCoverURL}
          alt="Preview da Capa"
          style={{
            width: 'auto',
            height: '400px',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '4px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
          }}
        />
      </Box>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Cadastrar
      </Button>
    </Box>
  )
}