import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

export const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component={Link} to={'/'} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
          Reading Journal
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to={'/'}>Home</Button>
          <Button color="inherit" component={Link} to={'/sobre'}>Sobre</Button>
          <Button color="inherit" component={Link} to={'/lista-de-livros'}>Lista de livros</Button>
          <Button color="inherit" component={Link} to={'/cadastrar'}>Cadastrar</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}