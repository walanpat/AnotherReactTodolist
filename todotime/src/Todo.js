import React from 'react';

export default (props) => (
  <div
    style={{
      textDecoration: props.complete ? 'line-through' : '',
    }}
    onClick={props.toggleComplete}
  >
    {props.text}
  </div>
);
