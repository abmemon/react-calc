import React from 'react'

function Keys(props) {
  return (
    <>
      
      <input type="button" className={props.cls} onClick={props.fn} value={props.val} />
    
    </>
    )
  }
  
  export default Keys