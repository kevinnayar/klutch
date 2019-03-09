import React from 'react';
import { node, oneOf, string } from 'prop-types';

const Column = ({
  children,
  columnWidth,
  gutter,
}) => {
  let width = '100%';

  switch (columnWidth) {
    case '1/2':
      width = '50%';
      break;
    case '1/4':
      width = '25%';
      break;
    case '1/8':
      width = '12.5%';
      break;
    case '1/3':
      width = '33.33%';
      break;
    case '2/3':
      width = '66.67%';
      break;
    case '1/5':
      width = '20%';
      break;
    case '2/5':
      width = '40%';
      break;
    case '3/5':
      width = '60%';
      break;
    case '4/5':
      width = '80%';
      break;
    default:
      width = '100%';
  }

  const columnStyles = {
    boxSizing: 'border-box',
    float: 'left',
    margin: '0',
    padding: '0',
    paddingRight: gutter,
    width,
  };

  return (
    <div style={columnStyles}>
      {children}
    </div>
  );
};

Column.defaultProps = {
  columnWidth: '1',
  gutter: '0',
};

Column.propTypes = {
  children: node.isRequired,
  columnWidth: oneOf([
    '1',
    '1/2',
    '1/4',
    '1/8',
    '1/3',
    '2/3',
    '1/5',
    '2/5',
    '3/5',
    '4/5',
  ]),
  gutter: string,
};

export default Column;
