async function getCards() {
    const allCards = [];
    let nextPage = 'https://api.scryfall.com/cards/search?q=set:rix';

    while (nextPage) {
        const response = await fetch(nextPage);
        const data = await response.json();
        nextPage = data.next_page;

        allCards.push(...data.data);
    }
    return allCards;
}

export default async function Cards() {
    const cards = await getCards();

    return (
        <>
            <h2>Cards</h2>
            {cards.length > 0 && cards.map((card) => (
                <div className="row mb-3 card-container" key={card.id}>
                    <div className="col-lg-2">
                        {card.image_uris && (
                            <img src={card.image_uris.small} className="img-fluid" />
                        )}
                    </div>
                    <div className="col-lg-10">
                        <h3>{card.name}</h3>
                        {card.mana_cost && (
                            <p><strong>Mana Cost:</strong> {card.mana_cost}</p>
                        )}
                        {card.type_line && (
                            <p><strong>Type:</strong> {card.type_line}</p>
                        )}
                        {card.oracle_text && (
                            <><p><strong>Card Text:</strong></p><blockquote>"{card.oracle_text}"</blockquote></>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}
