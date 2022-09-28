import React, { useContext } from 'react';
import { userContext } from './App';

const Consumer = () => {
  const value = useContext(userContext);
  return(
    <userContext.Consumer>
        <div>{value}</div>
    </userContext.Consumer>
  )
};

export default Consumer;
