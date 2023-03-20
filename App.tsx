import * as React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function App() {
  type Dog = {
    message: string;
  };

  const [data, setData] = useState<Dog>({} as Dog);

  useEffect(() => {
    fetchDogPic();
  }, []);

  function fetchDogPic() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>React + Typescript App</h1>
      <p>Random dog pic</p>
      <div id="pic_container">
        <img src={data.message} alt="" />
      </div>
      <button onClick={fetchDogPic}>Get random dog pic</button>
    </div>
  );
}
