import './App.css';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AccountBalanceIcon />
          <Typography variant="h6">Lazy Assets</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello everyone!
            </Typography>
          </Container>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
