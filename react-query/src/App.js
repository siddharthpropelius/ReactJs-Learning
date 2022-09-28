import axios from 'axios';
import { useQuery } from 'react-query';
import React from 'react'

function App() {
  const { isLoading, error, data } = useQuery('api', () =>
    axios.get('https://random.dog/woof.json')
  );
  const url = () =>
    axios.get('https://random.dog/woof.json').then((res) => {
      console.log(res.data.url);
    });
  console.log(url);
  //console.log(error);
  if (error) return <div>{error.message} </div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="App">
      <img src={data.data.url} alt="dog" />
    </div>
  );
}

export default React.memo(App);
