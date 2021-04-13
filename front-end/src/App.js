import './App.css';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/register" />
          </Route>
          <Route exact path="/register" component={ Register } />
          <Route exact path="/login" component={ Login } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
