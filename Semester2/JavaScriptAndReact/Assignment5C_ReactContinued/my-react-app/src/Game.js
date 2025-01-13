import React, { useState, useEffect } from 'react';

const PuzzleComponent = () => {
  const [puzzleData, setPuzzleData] = useState([]);
  const [showIncorrectCells, setShowIncorrectCells] = useState(false);

  useEffect(() => {
    // Fetch puzzle data on component mount
    const apiUrl = "https://prog2700.onrender.com/threeinarow/sample";
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        setPuzzleData(data.rows);
      })
      .catch(error => console.error('Error fetching puzzle data: ', error));
  }, [])};