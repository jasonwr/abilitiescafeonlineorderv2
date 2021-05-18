import React from 'react'

export const ItemForm = () => {
  return (
    <>
      <div className="logo">
        <img
          alt={"Logo"}
          src="../pageLogo/AbilitiesCafeLogoFinal-1.png"
          className="logo"
          style={{maxWidth: "200px"}}
          width="20%"
        />
      </div>
      <div className="center">
        <h1 className="margin-submit">Submit a new food item</h1>
        <form>
          <h2 className="margin-label">Name:</h2>
          <input className="margin-field" type="text" id="Name"/>
          <h2 className="margin-label">Image (must be 4:3 aspect ratio)</h2>
          <input className="margin-field" type="file" id="myFile" name="filename"/>
          <h2 className="margin-label">Description:</h2>
          <textarea className="margin-field" rows="5" cols="60" name="text" id="Description"
                    placeholder="Describe Food"/>
          <h2 className="margin-label">Price (US Dollars):</h2>
          <input className="margin-field" type="number" id="Price"/>
          <h2 className="margin-label">Type:</h2>
          <input className="margin-option" type="radio" id="Food" name="gender" value="Food"/>
          <label htmlFor="male">Food</label>
          <br/>
          <input className="margin-option" type="radio" id="Drink" name="gender" value="Drink"/>
          <label htmlFor="female">Drink</label>
          <br/>
          <input className="margin-option" type="radio" id="Other" name="gender" value="Other"/>
          <label htmlFor="other">Other</label>
          <br/>
          <input className="margin-submit" type="submit"/>
        </form>
      </div>
    </>
  )
}

