import './App.css';
import Header8 from './components/Header8';
import Nav8 from './components/Nav8';
import Home8 from './components/Home8';
import Register8 from './components/Register8';
import Login8 from './components/Login8';
import NewPubctn8 from './components/postPubctn8';
import { Route, Switch } from 'react-router-dom';
import { r_home, r_login, r_publics, r_signup, r_existent_pub } from './routes';
import { useState } from 'react';

function App() {

  const url = 'http://8gag-api.trek-quest.com/';
  const [currentPost, setCurrentPost] = useState('')

  return (
    <div className="App">
      <Header8 />
      <Nav8 />
      <main>
        <Switch>
          {/* <Route path={r_existent_pub} >
            <NewPubctn8 url={url}/>
          </Route> */}
          <Route path={r_publics} exact>
            <NewPubctn8 url={url}/>
          </Route>
          <Route path={r_signup} exact>
            <Register8 url={url}/>
          </Route>
          <Route path={r_login} exact>
            <Login8 url={url}/>
          </Route>
          <Route path={r_login} exact>
            <Login8 url={url}/>
          </Route>
          <Route path={r_home} exact>
            <Home8 url={url}/>
          </Route>
          <Route path={r_home}>
            <p>Aquí no hay nada</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
