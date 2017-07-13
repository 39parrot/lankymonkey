import React from 'react'

import './Menu.css'

const items = [{
  "img": "https://res.cloudinary.com/lankymonkey/image/upload/v1499528384/ovgvv4x00nixfwtdwgx7.jpg",
  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et mauris ipsum. Aenean sed auctor velit, malesuada commodo nunc. Quisque auctor eu erat quis maximus.",
  "price": "250 SEK"
}, {
  "img": "https://res.cloudinary.com/lankymonkey/image/upload/v1499528384/ovgvv4x00nixfwtdwgx7.jpg",
  "text": "Quisque vestibulum urna quam, a blandit eros volutpat rhoncus. Curabitur malesuada condimentum enim eget tempor. Morbi volutpat ut nibh nec vestibulum. Praesent euismod augue tortor, at dapibus nunc ullamcorper quis. Praesent a semper nisi, vitae rutrum odio. Phasellus malesuada leo et magna vehicula volutpat. Ut justo ipsum, ultricies sed euismod convallis, tincidunt at augue. Ut eu purus at ex semper scelerisque varius quis est.",
  "price": "350 SEK"
}];

const Menu = (props) => (
  <div class="menu">
    <ul>
      <table>
        {items.map(x => (
          <tr>
            <td>
              <img
                src={x.img}
                height="75px"
                width="100px"
              />
            </td>
            <td className="text">
              <span>{x.text}</span>
            </td>
            <td className="price">
              <span>{x.price}</span>
            </td>
          </tr>
        ))}
      </table>
    </ul>
  </div>
)

module.exports = { Menu }
