import React, { useState } from "react";
import EditForm from "./EditForm";
import authService from "../../services/authService";

const replaceManaCost = (manaCost) => {
  if (!manaCost) {
    return (
      <img
        src="https://svgs.scryfall.io/card-symbols/0.svg"
        alt="0 Mana"
        style={{
          width: "16px",
          height: "16px",
          margin: "0 2px",
          verticalAlign: "middle",
        }}
      />
    );
  }

  const manaSymbolMap = {
    "{U}": "https://svgs.scryfall.io/card-symbols/U.svg", // Blue mana
    "{W}": "https://svgs.scryfall.io/card-symbols/W.svg", // White mana
    "{B}": "https://svgs.scryfall.io/card-symbols/B.svg", // Black mana
    "{R}": "https://svgs.scryfall.io/card-symbols/R.svg", // Red mana
    "{G}": "https://svgs.scryfall.io/card-symbols/G.svg", // Green mana
    "{C}": "https://svgs.scryfall.io/card-symbols/C.svg", // Colorless mana
  };

  return manaCost.split(/(\{[A-Z0-9]+\})/).map((part, index) => {
    if (manaSymbolMap[part]) {
      return (
        <img
          key={index}
          src={manaSymbolMap[part]}
          alt={`${part.replace(/[{}]/g, "")} Mana`}
          style={{
            width: "16px",
            height: "16px",
            margin: "0 2px",
            verticalAlign: "middle",
          }}
        />
      );
    }

    if (part.match(/\{\d+\}/)) {
      const number = part.replace(/[{}]/g, ""); // Extract the number
      return (
        <img
          key={index}
          src={`https://svgs.scryfall.io/card-symbols/${number}.svg`}
          alt={`${number} Mana`}
          style={{
            width: "16px",
            height: "16px",
            margin: "0 2px",
            verticalAlign: "middle",
          }}
        />
      );
    }

    return part; // Plain text
  });
};

const Card = ({ imageLink, title, text, manaCost, cardId, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const isAuthenticated = authService.isSignedIn();

  const handleEditSave = (updatedCard) => {
    onUpdate(updatedCard); // Notify Main
    setIsEditing(false); // Close the edit form
  };

  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img
          className="card-img-top"
          alt={title}
          style={{ height: "225px", width: "100%", display: "block", objectFit: "contain" }}
          src={imageLink || "https://via.placeholder.com/225"} // Default image fallback
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              {isAuthenticated && (
                <>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => onDelete(cardId)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
            <small className="text-muted">Mana Cost: {replaceManaCost(manaCost)}</small>
          </div>
        </div>
      </div>

      {isEditing && (
        <EditForm
          cardId={cardId}
          onClose={() => setIsEditing(false)} // Close the edit form
          onSave={handleEditSave}
        />
      )}
    </div>
  );
};

export default Card;
