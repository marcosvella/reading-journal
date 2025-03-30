import { Link } from "react-router-dom"
import { Card, CardContent, CardMedia, CardActions, Typography, Button, Box, Grid, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

import { } from '../../utils/localStorage'

export const BookList = (props) => {

  const books = props.books
  const imgPlaceholder = "https://placehold.co/100.png"

  function formatDate(date) {
    const [ano, mes, dia] = date.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  return (
    <Box sx={{ width: '90%', paddingBottom: '2rem', margin: '0 auto' }}>
      {
        (books.length === 0 || !books) && (
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6">Nenhum livro cadastrado. Comece a cadastrar agora mesmo!</Typography>
            <Button variant="contained" color="primary" component={Link} to="/cadastrar">
              Cadastrar
            </Button>
          </Box>
        )
      }
      <Grid container spacing={4}>
        {books.map(book => (
          <Grid item xs={12} sm={6} md={4} key={book.title}>
            <Card sx={{ height: '100%', position: 'relative' }}>
              <CardMedia
                component="img"
                height="200"
                image={book.imageUrl ? book.imageUrl : imgPlaceholder}
                alt="Capa do livro"
                sx={{ objectFit: 'cover' }}
              />
              <IconButton 
                component={Link} 
                to={`/editar/${book.id}`} 
                sx={{ 
                  position: 'absolute', 
                  top: 8, 
                  right: 8, 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                  },
                  borderRadius: '50%'
                }}
              >
                <EditIcon />
              </IconButton>
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{book.author}</Typography>
                <Typography variant="body2" color="textSecondary">{book.genre}</Typography>
                <Typography variant="body2" color="textSecondary">{formatDate(book.date)}</Typography>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  sx={{ 
                    color: 'primary.main', 
                    backgroundColor: 'transparent', 
                    '&:hover': { 
                      backgroundColor: 'transparent',
                      textDecoration: 'underline',
                    } 
                  }} 
                  onClick={() => props.removeBook(book.title)}
                >
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}