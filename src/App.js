import {Route, BrowserRouter, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import NotFound from './components/NotFound'
import Cart from './components/Cart'
import Logout from './components/Logout'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={LoginForm} />
      <Route path="/products" exact component={Products} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/logout" exact component={Logout} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
