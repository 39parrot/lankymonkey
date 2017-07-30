import React from 'react'
import { Card } from 'antd'
import { mapPropsStream } from 'recompose'
import { fromPromise } from 'most'
// TODO: use axois instead
import * as rp from 'request-promise-native'

import './Menu.css'
import * as backend from '../backend.json'

const items = [{
  "img": "https://res.cloudinary.com/lankymonkey/image/upload/v1499528384/ovgvv4x00nixfwtdwgx7.jpg",
  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et mauris ipsum. Aenean sed auctor velit, malesuada commodo nunc. Quisque auctor eu erat quis maximus.",
  "price": "250 SEK"
}, {
  "img": "https://res.cloudinary.com/lankymonkey/image/upload/v1499528384/ovgvv4x00nixfwtdwgx7.jpg",
  "text": "Quisque vestibulum urna quam, a blandit eros volutpat rhoncus. Curabitur malesuada condimentum enim eget tempor. Morbi volutpat ut nibh nec vestibulum. Praesent euismod augue tortor, at dapibus nunc ullamcorper quis. Praesent a semper nisi, vitae rutrum odio. Phasellus malesuada leo et magna vehicula volutpat. Ut justo ipsum, ultricies sed euismod convallis, tincidunt at augue. Ut eu purus at ex semper scelerisque varius quis est.",
  "price": "350 SEK"
}];

const enhance = mapPropsStream(prop$ => prop$.flatMap(props =>
  fromPromise(
    rp({
      uri: backend.services.menu.get, // :: {"menu":[{"name":String,"price":Int}]}
      qs: { restaurant: props.restaurantId },
      json: true
    })
  )
  .map(menuBlob => ([...menuBlob.menu.map(item => (
    {...item, img: "https://res.cloudinary.com/lankymonkey/image/upload/v1499528384/ovgvv4x00nixfwtdwgx7.jpg"} // TODO: hardcode
  ))]))
  .map(menuBlob => ({ ...props, menuBlob}))
  .tap(console.log)
  // TODO: handle error
))

// const Restaurant = enhance(({ match, menuBlob }) => (
const Menu = enhance(props => (
  <Card
    title="Restaurant: ####"
    style={{ maxWidth: '640px' }}
  > {/* TODO: restaurant id/name */}
    {/* TODO: Grid instead of Table */}
    <table>
      {props.menuBlob.map(x => (
        <tr>
          <td>
            <img
              src={x.img}
              height="75px"
              width="100px"
            />
          </td>
          <td className="text">
            <span>{x.name}</span>
          </td>
          <td className="price">
            <span>{x.price}</span>
          </td>
        </tr>
      ))}
    </table>
  </Card>
))

export default Menu;
