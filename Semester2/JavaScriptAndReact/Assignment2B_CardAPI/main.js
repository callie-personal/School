(function () {
    //Magic the Gathering API
  var myApiUrl = "https://api.magicthegathering.io/v1/cards";
    //Fetch data from the API Url
  fetch(myApiUrl)
    .then((response) => response.json())
    .then((data) => {
        //Output to an unordered list
      var htmlOutput = "<ul>";
        //For each instance of a card, make a list with Name, Mana Cost
      data.cards.forEach(function (card) {
        //add some bold for readability, display Card name and it's Mana Cost
        htmlOutput += "<li><strong>" + card.name + "</strong></li><strong>Mana Cost: - </strong>" + card.manaCost;
        //Check if the card has rulings connected to the card effects
        if (card.rulings) {
            //nested list for the rulings date/text
          htmlOutput += "<ul>";
            //For each ruling, make a list including the date/text of ruling
          card.rulings.forEach(function (ruling) {
            //list displaying the ruling date and the text that goes with each ruling
            htmlOutput += "<li><strong>Date:</strong> " + ruling.date + "<br><strong>Text:</strong> " + ruling.text + "</li>";
          });
          //end the rulings list
          htmlOutput += "</ul>";
        }
      });
      //end the main list
      htmlOutput += "</ul>";

      $("#myData").html(htmlOutput);
    })
})();