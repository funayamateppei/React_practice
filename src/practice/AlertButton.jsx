import React from 'react';

const AlertButton = (props) => {

  // console.log(props);

  const handleClick = () => {
    alert(props.children);
  }

  return (
    <>
      <button onClick={handleClick}>アラートボタン</button>
    </>
  )
}

export default AlertButton