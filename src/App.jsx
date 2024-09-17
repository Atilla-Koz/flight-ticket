import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Components/Layout/Home';
import Tickets from './Components/Layout/Tickets';

function App() {
  return (
    <section>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/ticket">
          <Tickets />
        </Route>
      </Switch>
    </section>
  );
}

export default App;
