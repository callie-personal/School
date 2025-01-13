import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "./Card";

const Main = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await Axios.get(`${import.meta.env.VITE_API_URL}/cards`);
      setData(response.data);
      setFilteredData(response.data); // Set filtered data to the full dataset initially
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const handleSearch = () => {
    const filtered = data.filter((item) =>
      item.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleDelete = (deletedCardId) => {
    setData((prevData) => prevData.filter((item) => item._id !== deletedCardId));
    setFilteredData((prevData) =>
      prevData.filter((item) => item._id !== deletedCardId)
    ); // Update filtered data as well
  };

  const handleUpdate = async () => {
    await fetchCards(); // Refetch data from the server
  };

  return (
    <div>
      <section className="jumbotron text-center">
        <div className="container">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {filteredData.map((item) => (
              <Card
                key={item._id}
                cardId={item._id}
                imageLink={item.image_link}
                title={item.Name}
                text={item.card_text}
                manaCost={item.mana_cost}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
