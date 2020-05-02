import React, {useState, useEffect} from 'react';

const Message = (props) => {
  return (
    <div>
      {props.show == true ? <p>{props.message}  <button onClick={props.toggle}>X</button></p> : ''}
    </div>
  )
}

export default Message;