import React from 'react';


function Button({text,styl}) {
  return (
    <div>
        <button className={styl} >
        {text}
        </button>
    </div>
  )
}

export default Button