import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ to, className, children }) => {
  return <Link to={to}><button className = {className}>{children}</button></Link>;
}

export default ButtonLink;