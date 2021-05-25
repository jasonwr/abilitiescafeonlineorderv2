import React, {useRef} from 'react'

export const MenuItem = ({name, description, callback, callback2, monetaryValue}) => {

  return (
    <div className="column-item">
      <img
        src={require(`./test_images/${name}.jpg`)}
        width="100%"
        alt={name}
      />
      {description}
      <button
        className="button"
        height="20px"
        onClick={() => callback(name)}
      >
        Add to cart ({monetaryValue})
      </button>
      <button
        className="button"
        height="20px"
        onClick={() => callback2(name)}
        >
          Remove to cart
        </button>
    </div>
  )
}