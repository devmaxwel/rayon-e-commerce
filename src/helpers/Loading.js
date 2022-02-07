import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = ({size=1000}) => {
  return <div style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:"100%",
      height:"100%"
  }}>
      <Spinner style={{
          size:size,
          heigh:size
      }} animation='border' color='red' />
  </div>;
};

export default Loading;
