import { Link } from "react-router-dom"
import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material'

export const BookList = (props) => {
  const { books, removeBook } = props

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
      <Box>
        {books.map(book => (
          <Card key={book.id} sx={{ marginBottom: 2 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="subtitle1" color="textSecondary">{book.author}</Typography>
                <Typography variant="body2" color="textSecondary">{book.genre}</Typography>
                <Typography variant="body2" color="textSecondary">{formatDate(book.readAt)}</Typography>
              </Box>
              <Box>
                <Button 
                  size="small" 
                  sx={{ 
                    color: 'primary.main', 
                    backgroundColor: 'transparent', 
                    '&:hover': { 
                      backgroundColor: 'transparent',
                      textDecoration: 'underline',
                    },
                    marginRight: 1
                  }} 
                  component={Link} 
                  to={`/editar/${book.id}`}
                >
                  Editar
                </Button>
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
                  onClick={() => removeBook(book.id)}
                >
                  Remover
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}