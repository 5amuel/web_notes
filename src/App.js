import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { ThemeProvider, createTheme } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';


const theme = createTheme ({
  palette : {
    primary:{
      main: "#fefefe"
    },
    secondary: purple
  },
  typography:{
    fontFamily: "quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
