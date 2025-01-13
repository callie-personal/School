// Import the Vercel Postgres client
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import Image from "next/image";
import styles from "../../styles/page.module.css";

async function saveCard(data) {
  'use server'

  const name = data.get('name');
  const type = data.get('type');
  const mana_cost = data.get('mana_cost');
  const image_url = data.get('image_url');

  await sql`
      INSERT INTO cards (name, type, mana_cost, image_url)
      VALUES (${name}, ${type}, ${mana_cost}, ${image_url})
  `;

  redirect('/api/addCard');
}

async function getCards() {
    try {
        const { rows } = await sql`SELECT id, name, type, mana_cost, image_url FROM cards`;
        return rows;
    } catch (err) {
        console.error("Error fetching cards:", err);
        return null;
    }
}

// Make this component asynchronous to allow for server-side data fetching
export default async function AddCard() {
    const cards = await getCards();
  
    return (
      <div className="container">
        <h1>Add Card</h1>
        <form action={saveCard}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Card Name: </label>
                <input name="name" placeholder="Card Name" required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="type">Card Type: </label>
                <input name="type" placeholder="Card Type" required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="mana_cost">Mana Cost: </label>
                <input name="mana_cost" placeholder="Mana Cost" required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="image_url">Image URL: </label>
                <input name="image_url" placeholder="Image URL" />
            </div>
          <button type="submit">Save Card</button>
        </form>
  
        <h1>Cards</h1>
        <div className={styles.cardList}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <h3>{card.name}</h3>
              <p>Type: {card.type}</p>
              <p>Mana Cost: {card.mana_cost}</p>
              {card.image_url && (
                <Image src={card.image_url} alt={card.name} width={100} height={150} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
