import React from 'react'
import styles from './Link.module.css'

const Link = ({icon, text, type}) => {
  return (
    <div className={styles.container}>
      <img src={icon} alt="" />
      <a className={linkType(type)} href="#">{text}</a>
    </div>
  )
}

function linkType(color) {
  if(color === "light") {
    return styles.link_light
  } else if(color === "dark") {
    return styles.link_dark
  }
}
export default Link