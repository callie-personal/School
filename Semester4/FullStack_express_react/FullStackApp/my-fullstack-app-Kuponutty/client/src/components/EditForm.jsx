import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const EditForm = ({ cardId, onClose, onSave }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!cardId) {
      setMessage("Invalid card ID.");
      setLoading(false);
      return;
    }

    const fetchCard = async () => {
      try {
        const token = sessionStorage.getItem("authToken");
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/cards/${cardId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        reset(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching card data:", error.response?.data || error.message);
        setMessage("Failed to load card data.");
        setLoading(false);
      }
    };
    fetchCard();
  }, [cardId, reset]);

  const onSubmit = async (data) => {
    console.log("onSubmit triggered with data:", data);

    try {
      const token = sessionStorage.getItem("authToken");
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/cards/${cardId}`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        onSave(response.data); // Notify parent about the updated card
        onClose(); // Close the form
      }
    } catch (error) {
      console.error("Error updating card:", error.response?.data || error.message);
      setMessage("Failed to update the card.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="edit-form-container">
      <h2>Edit Card</h2>
      {message && <p className={`text-${message.includes("Failed") ? "danger" : "success"}`}>{message}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="Name">Card Name:</label>
          <input
            id="Name"
            {...register("Name", { required: "Card Name is required" })}
            className={`form-control ${errors.Name ? "is-invalid" : ""}`}
          />
          {errors.Name && <div className="invalid-feedback">{errors.Name.message}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="image_link">Image Link:</label>
          <input
            id="image_link"
            {...register("image_link", { required: "Image Link is required" })}
            className={`form-control ${errors.image_link ? "is-invalid" : ""}`}
          />
          {errors.image_link && <div className="invalid-feedback">{errors.image_link.message}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="mana_cost">Mana Cost:</label>
          <input
            id="mana_cost"
            {...register("mana_cost")}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="card_text">Card Text:</label>
          <textarea
            id="card_text"
            {...register("card_text")}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">Save Changes</button>
        <button type="button" className="btn btn-secondary ml-2" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditForm;