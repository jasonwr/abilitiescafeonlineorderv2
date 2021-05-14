import React, {useRef} from 'react'
import '../css/Products.css'

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

        debugger
        //update image
        myImage.src = 'img/' + message + '.jpg'

        //Note: you probably want to change this to read the file and put its text inside
        textDescription.innerText = 'description/' + message + '.txt'
    }

    //make the product details window disappear
    function off() {
        var x = marginDIV
        if (x && x.style && x.style.display) {
            x.style.display = "none"
        }
    }



    return (
        <>
            <div className={"center"}>
                <img src="../pageLogo/AbilitiesCafeLogoFinal-1.png" className="center" max-width="200px" width="20%"></img>
            </div>

            <div className="center">
                <div className="column">
                    <div className="column-item">
                        <img src="cookie.jpg" width="100%"></img>
                        <p>Cookies.  Need I say more?</p>
                        <span><button className="button" height="20px" onClick={() => on('Cookie')}>Add to cart ($3.00)</button></span>
                    </div>

                    <div className= "column-item">
                        <img src = "../../../img/Sandwich.jpg" width = "100%"></img>
                        <p>Artisan sandwiches</p>
                        <span><button className="button" height="20px" onClick={() => on('Sandwitch')}>Add to cart ($10.00)</button></span>
                    </div>
                </div>

                <div className="column">
                    <div className= "column-item">
                        <img src = "../../../img/Coffee.jpg" width = "100%"></img>
                        <p>Coffee, available in "for here" and "to go" cups</p>
                        <span><button className="button" height="20px" onClick={() => on('Coffee')}>Add to cart ($4.00)</button></span>
                    </div>

                    <div className="column-item">
                        <img src ="../../../img/Scone.jpg" width = "100%"></img>
                        <p>Housemade scones</p>
                        <span><button className="button" height = "20px" onClick={() => on('Scone')}>Add to cart ($5.50)</button></span>
                    </div>
                </div>
            </div>

            
            <div className="center2">
                <div ref={marginDIV} display="none">
                    <div className="top_popup">
                    <div>
                        <img ref={myImage} src="Cookie.jpg"/>
                        <div width="40%" height="1000px" padding="1%">
                            <p ref={textDescription} width="40%" style={{fontSize: '30px'}}>oops</p>
                            <input type="number" id="quanitityBox"/>
                        </div>
                    </div>
                    </div>
                    <div className="bottom_buttons">
                        <button className="popup_button" height="20px" onClick={() => off('Scone')}>Add to cart</button>
                        <button className="popup_button" height="20px" onClick={() => off('Scone')}>Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}