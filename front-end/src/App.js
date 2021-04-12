import './App.css';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Register from './pages/Register';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/register" />
          </Route>
          <Route exact path="/register" component={ Register } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
