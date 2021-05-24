import React, {useEffect, useRef, useState} from 'react'
import '../css/Products.css'
import {MenuItem} from './MenuItem'
import { getMenuItems } from '../api/getMenuItems'

export const Products = () => {

  let [menuItems, setMenuItems] = useState({})

  useEffect(() => {
     getMenuItems()
        .then((querySnapshot) => {
          let formatted = {}
          querySnapshot.forEach((doc) => {
           // {"Name":"Scone","Quantity":20000,"Price":"$5.50","Description":"Home made scones"}
            const {Name: name, Price: price, Quantity: qty, Description: desc} = doc.data()
            formatted[name] = {
              desc,
              price,
              qty,
            }
            // console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
          });
          setMenuItems(formatted)
        })
        .catch(e => {
         console.log('There was an error')
         console.log(e)
       })
  }, [])

  let marginDIV = useRef()
  let myImage = useRef()
  let textDescription = useRef()

  const hasItems = () => {
    let menuKeys = Object.keys(menuItems) 
    if (menuItems && menuKeys.length > 0) {
      return !!getQtyTotal()
    }

    return false
  }

  const getQtyTotal = () => {
    return Object
      .keys(menuItems)
      .reduce((qtyTotal, key) => {
        return qtyTotal + menuItems[key]["qty"]
      }, 0)
  }

  const getPriceTotal = () => {
    return Object
      .keys(menuItems)
      .reduce((total, key) => {
        const { price, qty } = menuItems[key]
        return total + (price * qty)
      }, 0)
  }

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
    'Sandwiches':
    {
      desc: 'Artisan sandwiches',
      price: '10.00',
      qty: 0
    }
  })

  //make the product details window appear and/or update its contents
  function addToCart(name) {
    items[name]['qty'] += 1
    let updatedMenuItems = items
    debugger
    setMenuItems(JSON.parse(JSON.stringify(updatedMenuItems)))
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
          Object.keys(menuItems).map((item, i) => {
            let {price, desc} = menuItems[item]
            return (
              <MenuItem
                key={`menu-item-${i}`}
                callback={name => addToCart(name)}
                monetaryValue={price}
                description={desc}
                name={item}
              />
            )
          })

        }
        </div>
        
      </div>
      <div className="center">
        <div className="column">
          {
            hasItems() && (
              <h4>Grand Total: ${getPriceTotal()}</h4>
            )
          }
          {
            hasItems() && Object.keys(menuItems).map((item, i) => {
              let {price, qty} = menuItems[item]
              debugger
              return (
                <div
                  key={`cart-output-item-${i}`}
                >
                  {item}({price}) - {qty}
                </div>
              )
            })
          }
        </div>
      </div>
      
    </>
  )
}