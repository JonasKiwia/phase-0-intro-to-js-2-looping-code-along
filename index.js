// Code your solutions in this file
function writeCards(names, event) {
    // Empty array to store the messages
    let thankYouMessages = [];
  
    // Loop through the array of names
    for (let i = 0; i < names.length; i++) {
      // thank-you message for each name
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  
      // Adds message to array
      thankYouMessages.push(message);
    }
  
    // Returns the array of message
    return thankYouMessages;
  }
  

  const messages = writeCards(["Juma", "Victor", "Ali"], "birthday");
  console.log(messages);


  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--; // Decrement the number 
    }
  }
  

  countDown(10);
  
  
