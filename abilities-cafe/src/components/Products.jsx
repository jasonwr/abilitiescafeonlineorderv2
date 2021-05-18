import React, {useRef} from 'react'
import '../css/Products.css'
import {MenuItem} from './MenuItem'

export const Products = () => {

  let marginDIV = useRef()
  let myImage = useRef()
  let textDescription = useRef()

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
          <MenuItem
            callback={name => on(name)}
            monetaryValue={'3.00'}
            description={'Cookies!'}
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