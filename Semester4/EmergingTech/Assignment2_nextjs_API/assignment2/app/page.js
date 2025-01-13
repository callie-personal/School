"use client";

import { useRouter } from 'next/navigation'

export default function Home() {


    const router = useRouter()
    const handleAddCardClick = () => {
      router.push("/api/addCard");
    };

  return (
    <>
    <div className="container">
      <h2>Welcome to the Scryfall API!</h2>
      <p>
        Please click a link on the left to view the cards.
      </p>
      <button className="btn btn-primary" onClick={handleAddCardClick}>Add Card To Database</button>
    </div>
    </>
  )
}