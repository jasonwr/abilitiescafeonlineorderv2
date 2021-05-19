import React, {useEffect, useRef, useState} from 'react'
import '../css/Products.css'
import {MenuItem} from './MenuItem'
import { getMenuItems } from '../api/getMenuItems'

export const Products = () => {

  let [menuItems, setMenuItems] = useState()

  useEffect(() => {
     getMenuItems()
       .then(r => {
         debugger
         console.log(JSON.stringify(r))
       })
       .catch(e => {
         console.log('There was an error')
         console.log(e)
       })
  }, [])

  let marginDIV = useRef()
  let myImage = useRef()
  let textDescription = useRef()

  let [items, setItems] = useState({
    'Cookie':
    {
      desc: 'Cookies!',
      price: '5.00',
      qty: 0
    },
    'Scone':
    {
      desc: 'Home made scones',
      price: '5.50',
      qty: 0
    },
    'Coffee':
    {
      desc: 'Coffee for the soul',
      price: '4.00',
      qty: 0
    },
    'Sandwich':
    {
      desc: 'Artisan sandwiches',
      price: '10.00',
      qty: 0
    }
  })

  //make the product details window appear and/or update its contents
  function on(message) {
    let x = marginDIV
    if (x && x.style && x.style.display) {
      x.style.display = "block"
    }

    //update image
    myImage.src = './test_images/' + message + '.jpg'

    //Note: you probably want to change this to read the file and put its text inside
    textDescription.innerText = 'description/' + message + '.txt'
  }

  //make the product details window disappear
  function off() {
    let x = marginDIV
    if (x && x.style && x.style.display) {
      x.style.display = "none"
    }
  }

  return (
    <>
      <div className={"center"}>
        <img
        alt={"Logo"}
        className="center"
        src={require("./test_images/AbilitiesCafeLogoFinal-1.png")}
        style={{maxWidth: "200px", width: "200px", height: "200px"}}
      />
     </div>

      <div className="center">
        <div className="column">
        {
          Object.keys(items).map((item, i) => {
            let {qty, price, desc} = items[item]
            return (
              <MenuItem
                callback={name => on(name)}
                monetaryValue={price}
                description={desc}
                name={item}
              />
            )
          })
/* TODO: figure out where to inject the <div className="column">
          let rows = nodes.length / 2
          for(let i = 0; i < nodes.length; i++) {
            if ((i+1) % rows == 0)
          }
*/
        }
        </div>
        {/* <div className="column">
          <MenuItem
            callback={name => on(name)}
            monetaryValue={'3.00'}
            description={'Cookies. Need I say more?'}
            name={'Cookie'}
          />

          <MenuItem
            callback={name => on(name)}
            monetaryValue={'10.00'}
            description={'Artisan sandwiches'}
            name={'Sandwich'}
          />
        </div>



        <div className="column">

          <MenuItem
            callback={name => on(name)}
            monetaryValue={'4.00'}
            description={'Coffee for the soul'}
            name={'Coffee'}
          />

          <MenuItem
            callback={name => on(name)}
            monetaryValue={'5.50'}
            description={'House made scones'}
            name={'Scone'}
          />
        </div> */}
      </div>
      <div className="center">
        <div calssName="column">
          {
            Object.keys(items).map(item => {
              let {qty, price} = items[item]
              return (
                <div>
                  {item}(${price}) - {qty}
                </div>
              )
            })
          }
        </div>
      </div>


      {/*<div className="center2">*/}
      {/*  <div ref={marginDIV} display="none">*/}
      {/*    <div className="top_popup">*/}
      {/*      <div>*/}
      {/*        <img ref={myImage} src="Cookie.jpg"/>*/}
      {/*        <div width="40%" height="1000px" padding="1%">*/}
      {/*          <p ref={textDescription} width="40%" style={{fontSize: '30px'}}>oops</p>*/}
      {/*          <input type="number" id="quanitityBox"/>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <button className="popup_button" height="20px" onClick={() => off('Scone')}>Add to cart</button>*/}
      {/*      <button className="popup_button" height="20px" onClick={() => off('Scone')}>Close</button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  )
}