import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom'

import { fromPromise } from 'most'
import { setObservableConfig, mapPropsStream } from 'recompose'
import mostConfig from 'recompose/mostObservableConfig'
// TODO: use axois instead
import * as rp from 'request-promise-native'

import AppLayout from './components/AppLayout';

// TODO: this is initial config -> should be somewhere else
setObservableConfig(mostConfig)

const App = () => (
  <Router>
    <AppLayout/>
  </Router>

  // <Router>
  //   <div>
  //
  //     <div>
  //       <h3>Restaurants</h3>
  //       <span>
  //         <Link to="/restaurant/aslkdfhdsl">aslkdfhdsl</Link>
  //       </span>
  //       &nbsp;
  //       <span>
  //         <Link to="/restaurant/KJHLKG">KJHLKG</Link>
  //       </span>
  //     </div>
  //
  //     <hr/>
  //
  //     <Route exact path="/" component={Home}/>
  //     <Route path="/restaurant/:id" component={Restaurant}/>
  //   </div>
  // </Router>
)

const enhance = mapPropsStream(prop$ => prop$.flatMap(props =>
  fromPromise(
    rp({
      uri: 'https://wt-dmitry-kouznetsov-gmail-com-0.run.webtask.io/menu', // {"menu":[{"name":String,"price":Int}]}
      qs: { restaurant: props.match.params.id },
      json: true
    })
  ).map(resp => ({ ...props, menuBlob: resp}))
  // TODO: handle error
))

const Restaurant = enhance(({ match, menuBlob }) => (
  <div>
    <h2>Restaurant: {match.params.id}</h2>
    <h3>Menu</h3>
    <ul>
      <li>{menuBlob.menu[0].name}{menuBlob.menu[0].price}</li>
    </ul>
  </div>
))

const Home = () => (
  <div>
    <span>Select a restaurant to see its menu</span>
  </div>
)

export default App;
