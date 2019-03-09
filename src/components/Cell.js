import React from 'react';
import { node, object, string } from 'prop-types';

const Cell = ({ children, classNames, style }) => {
  const cellStyles = {
    boxSizing: 'border-box',
    width: '100%',
    margin: '0 auto',
    minHeight: '50px',
    ...style,
  };

  return (
    <div
      style={cellStyles}
      className={classNames}
    >
      {children}
    </div>
  );
};

Cell.defaultProps = {
  children: '',
  classNames: 'klutch-cell',
  style: {},
};

Cell.propTypes = {
  children: node,
  classNames: string,
  style: object,
};

export default Cell;
