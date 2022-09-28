import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from './data';

const Item = () => {
  const id = useParams();
  let itemID = parseInt(id.itemId);
  const [response, setRes] = useState([{ id: '', name: '' }]);

  useEffect(() => {
    //console.log(res);
    data.find((item) => {
      //console.log(item)
      if (item.id === itemID) {
        setRes(item);
      }
    });
  }, [response]);
  return (
    <div>
      <p>{response.id}</p>
      <p>{response.name}</p>
    </div>
  );
};

export default Item;
