import React from 'react'
import '../css/Products.css'

const Products = () => {

    //make the product details window appear and/or update its contents
    function on(message) {
        var x = document.getElementById("marginDIV");
        x.style.display = "block";

        //update image
        document.getElementById("myImage").src = 'img/' + message + '.jpg';

        //Note: you probably want to change this to read the file and put its text inside
        document.getElementById("textDescription").innerText = 'description/' + message + '.txt';
    }

    //make the product details window disappear
    function off() {
        var x = document.getElementById("marginDIV");
        x.style.display = "none";
    }



    return (
        <>
            <div class={"center"}>
                <img src="../pageLogo/AbilitiesCafeLogoFinal-1.png" class = "center" max-width = "200px" width = "20%"></img>
            </div>

            <div class="center">
                <div class="column">
                    <div class = "column-item">
                        <img src = "cookie.jpg" width = "100%"></img>
                        <p>Cookies.  Need I say more?</p>
                        <span><button class="button" height = "20px" onclick="on(&quot;Cookie&quot;)">Add to cart ($3.00)</button></span>
                    </div>

                    <div class = "column-item">
                        <img src = "../../../img/Sandwich.jpg" width = "100%"></img>
                        <p>Artisan sandwiches</p>
                        <span><button class="button" height = "20px" onclick="on(&quot;Sandwich&quot;)">Add to cart ($10.00)</button></span>
                    </div>
                </div>

                <div class="column">
                    <div class = "column-item">
                        <img src = "../../../img/Coffee.jpg" width = "100%"></img>
                        <p>Coffee, available in "for here" and "to go" cups</p>
                        <span><button class="button" height = "20px" onclick="on(&quot;Coffee&quot;)">Add to cart ($4.00)</button></span>
                    </div>

                    <div class = "column-item">
                        <img src = "../../../img/Scone.jpg" width = "100%"></img>
                        <p>Housemade scones</p>
                        <span><button class="button" height = "20px" onclick="on(&quot;Scone&quot;)">Add to cart ($5.50)</button></span>
                    </div>
                </div>
            </div>

            
            <div class = "center2">
                <div id = "marginDIV" display = "none">
                    <div class = "top_popup">




                    <div>
                            <img id="myImage" src="Cookie.jpg"/>
                            <div width = "40%" height = "1000px" padding = "1%">
                                <p id="textDescription" width = "40%" style="font-size:30px">oops</p>
                                <input type="number" id="quanitityBox"/>
                            </div>
                        </div>




                    </div>
                    <div class = "bottom_buttons">
                        <button class="popup_button" height="20px" onclick="off(&quot;scone&quot;)">Add to cart</button>
                        <button class="popup_button" height="20px" onclick="off(&quot;scone&quot;)">Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}