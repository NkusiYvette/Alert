let contacts = [
    {
      name: "Maxwell Wright",
      phone: "(0191) 719 6495",
      email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
      name: "Raja Villarreal",
      phone: "0866 398 2895",
      email: "posuere.vulputate@sed.com"
    },
    {
      name: "Helen Richards",
      phone: "0800 1111",
      email: "libero@convallis.edu"
    }
  ];
  
  // Ask the user for their choice
  let userChoice = prompt("Enter your choice (first, last, new):");
  
  // Process the user's choice
  switch (userChoice.toLowerCase()) {
    case "first":
      if (contacts.length > 0) {
        console.log("First Contact:", contacts[0]);
      } else {
        console.log("Contact list is empty.");
      }
      break;
  
    case "last":
      if (contacts.length > 0) {
        console.log("Last Contact:", contacts[contacts.length - 1]);
      } else {
        console.log("Contact list is empty.");
      }
      break;
  
    case "new":
      let newName = prompt("Enter the name:");
      let newPhone = prompt("Enter the phone:");
      let newEmail = prompt("Enter the email:");
  
      // Check if all necessary data is provided
      if (newName && newPhone && newEmail) {
        // Add the new contact to the list
        let newContact = {
          name: newName,
          phone: newPhone,
          email: newEmail
        };
        contacts.push(newContact);
        console.log("New contact added successfully:", newContact);
      } else {
        console.log("Error: Please provide all necessary data for the new contact.");
      }
      break;
  
    default:
      console.log("Invalid choice. Please enter 'first', 'last', or 'new'.");
  }
  