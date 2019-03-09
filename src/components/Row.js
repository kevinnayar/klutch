import React from 'react';
import { bool, node, string } from 'prop-types';

const Row = ({ children, gutter, removeBottomGutter }) => {
  const rowStyles = {
    width: '100%',
    content: '',
    display: 'table',
    clear: 'both',
    boxSizing: 'border-box',
    margin: '0 auto',
    padding: gutter,
    paddingRight: 0,
    paddingBottom: (removeBottomGutter) ? 0 : gutter,
  };

  const childrenWithProps = React.Children.map(children, child => {
    return React.cloneElement(child, { gutter });
  });

  return (
    <section style={rowStyles}>
      {childrenWithProps}
    </section>
  );
};

Row.defaultProps = {
  gutter: '0',
  removeBottomGutter: false,
};

Row.propTypes = {
  children: node.isRequired,
  gutter: string,
  removeBottomGutter: bool,
};

export default Row;
