import './App.css';
import React, { useState } from 'react';
import Grid from "./Grid";

function App() {
  const veggieData = [
    {
        name: "Parsnip",
        img: "https://media.istockphoto.com/photos/parsnip-isolated-on-the-white-background-close-up-picture-id884855382?s=612x612",
        likeCount: 0
    },
    {
        name: "Carrot",
        img: "https://media.istockphoto.com/photos/fresh-carrots-picture-id133483506?s=612x612",
        likeCount: 0
    },
    {
        name: "Potato",
        img: "https://media.istockphoto.com/photos/potatoes-picture-id879133438?s=612x612",
        likeCount: 0
    },
    {
        name: "Squash",
        img: "https://media.istockphoto.com/photos/butternut-squash-picture-id505198157?s=612x612",
        likeCount: 0
    },
    {
        name: "Pumpkin",
        img: "https://media.istockphoto.com/photos/pumpkin-picture-id184279619?s=612x612",
        likeCount: 0
    },
    {
        name: "Peas",
        img: "https://media.istockphoto.com/photos/green-peas-closeup-picture-id628151946?s=612x612",
        likeCount: 0
    }
];

const [veggies, setVeggies]=useState(veggieData);
//like button function
const handleLike = (veggieName) => {
  //use setVeggies to update state
  setVeggies((prevVeggies) =>
  //map creating a new array of veggies
    prevVeggies.map((veggie) =>
    //if the veggie's name matches the clicked veggie's name, increase likeCount
      veggie.name === veggieName ? { ...veggie, likeCount: veggie.likeCount + 1} 
      //if false don't change veggie
      : veggie
    ));
};

  return (
    <div className="App">
      <h1>Smash that Like Button!</h1>
      <Grid veggies={veggies} onLike={handleLike}/>
    </div>
  );
}

export default App;
