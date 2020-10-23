import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Button = ({type, text}) => 
(
  <Link className={type}>
    {text}
  </Link>
)

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string
};

export default Button