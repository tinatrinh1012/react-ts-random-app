import * as React from 'react';
import '../style.css';
import { useState, useEffect } from 'react';

export default function RandomCatDog() {
  type Dog = {
    message: string;
  };
  type Cat = {
    url: string;
  };

  const [dog, setDog] = useState<Dog>({} as Dog);
  const [cat, setCat] = useState<Cat>({} as Cat);

  useEffect(() => {
    fetchDogPic();
    fetchCatPic();
  }, []);

  function fetchDogPic() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((dogData) => {
        console.log(dogData);
        setDog(dogData);
      })
      .catch((err) => console.log(err));
  }

  function fetchCatPic() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((res) => res.json())
      .then((catData) => {
        console.log(catData[0]);
        setCat(catData[0]);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>React + Typescript App</h1>

      <p>Random cat pic</p>
      <div className="pic_container">
        <img src={cat.url} alt="" />
      </div>
      <button onClick={fetchCatPic}>Get random cat pic</button>

      <p>Random dog pic</p>
      <div className="pic_container">
        <img src={dog.message} alt="" />
      </div>
      <button onClick={fetchDogPic}>Get random dog pic</button>
    </div>
  );
}
