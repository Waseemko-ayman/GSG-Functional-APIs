import React from 'react'
import "./style.css";

const Container = ({ children, nospaces}) => {
  return (
    <div className={`main__container ${nospaces ? "main__container--padding" : ""}`}>
      {children}
    </div>
  )
}

export default Container;