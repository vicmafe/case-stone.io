import './App.css';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/register" />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
