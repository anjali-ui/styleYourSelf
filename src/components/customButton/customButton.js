import React from 'react';
import './custom-btn.scss';

const CustomButton = ({children, otherProps}) => {
    return (
      <button className="custom-button" {...otherProps}>{children}</button>
    );
}

export default CustomButton;