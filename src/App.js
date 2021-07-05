import './App.css';
import Header8 from './components/Header8';
import Nav8 from './components/Nav8';
import Home8 from './components/Home8';
import Register8 from './components/Register8';
import Login8 from './components/Login8';
import { Route, Switch } from 'react-router-dom';
import { r_home, r_login, r_signup } from './routes';

function App() {

  const url = 'http://8gag-api.trek-quest.com/';

  return (
    <div className="App">
      <Header8 />
      <Nav8 />
      <main>
        <Switch>
          <Route path={r_signup} exact>
            <Register8 url={url}/>
          </Route>
          <Route path={r_login} exact>
            <Login8 url={url}/>
          </Route>
          <Route path={r_home} exact>
            <Home8 url={url}/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
