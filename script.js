// Javascript - Functions Guide

// Create an array 
const contacts = [];
// The script must contain the following functions:
/* Parameter.
- Output - A message that  the function should output in the console. Use console.log()*/
// 1. addContact - adds a contact to the list
// contact: Object containing information to create a new contact
const add = (contact) => { // parameter
    for(let i = 0; i < contacts.length; i++) {
        if (contacts[i].email === contact.email) {
            console.log("Duplicate was found"); // Outputs Error message if contact is not valid
            // “Duplicate was found” (email address is the unique identifier)
            return;
        }
    }

  // “Missing fields” if name or email are not present in the passed in object
  if(!contact.email || !contact.name) {    /* ! means not or no and || means or. */
    console.log("Missing fields");
    return;
  }
  // “was added”
  contacts.push(contact);
  console.log("was added");

}
// Create a contact list where every contact must have a name and email, and can (i.e. might not have) have phoneNumber and company.
add ({name: "Anna Valsdóttir", email: "anna@tskoli.is"})
add ({name: "Jón Jónsson", email: "jon@tskoli.is"})
add ({name: "Hildur Eiríksdóttir", email:"hildur@tskoli.is"})
console.log ("after add")


// remove( email ) - Remove corresponding contact / Email address is the unique identifier
/*Parameters
email: Email address
Outputs
Error
“Contact not found”
Success
“ was removed”
 */
const remove = (email) => {
  for(let i = 0; i < contacts.length; i++) {
    if(contacts[i].email === email) {
      contacts.splice(i, 1);    // Splice is used to modify the contents of an array by removing existing elements and / or adding new elements.
      console.log("was removed");
      return;
    } else {
      console.log("Contact not found");  
  }
}
remove("jon@tskoli.is"); // Remove contact
console.log("contacts after remove");


// edit( email, newData ) - Update/Increment the corresponding contact’s data with the information that’s passed in / Email address is the unique identifier
/* Parameters
email: Email address
newData: object representing the new information for the contact
Outputs
Error
“Contact not found”
Success
“ was updated”
*/
const edit = (email, newData) => {
  for(let i = 0; i < contacts.length; i++) {
    if(contacts[i].email === email) { // If email is found      
      contacts[i] = {...contacts[i], ...newData}; // Spread operator
      console.log("was updated");
      return;
    } else {
    console.log("Contact not found");
  }
}
edit("hildur@tskoli.is", {name: "Hildur Eiríksdóttir", email: "hildur@tskoli.is"});   // Edit contact

// get( email ) - Output information for the corresponding contact / Email address is the unique identifier
/* Parameters 
Parameters
email: Email address
Outputs
Error
“Contact not found”
Success
“Name:
Email:
Phone number:
Company: ”
*/
const get = (email) => {
  for(let i = 0; i < contacts.length; i++) {
    if(contacts[i].email === email) {
      console.log("Name: " + contacts[i].name);
      console.log("Email: " + contacts[i].email);
      return;
    } else {
    console.log("Contact not found");
  }
}
get("anna@tskoli.is"); // Get contact
console.log("contacts");



// list() - Output all contacts
/* Parameters
Parameters
None
Output example
“Anna Valsdóttir ana@tskoli.is, Jón Jónsson jon@tskoli.is, Hildur Eriksdóttir hildur@tskoli.is”
*/
const list = () => {
  for(let i = 0; i < contacts.length; i++) {  
    console.log(contacts[i].name + " " + contacts[i].email);
  }   
}
list(); // List all contacts


/*
clear() - Remove all contacts from the list
Parameters
None
Output
“The contact list was cleared”
*/
const clear = () =>
    contacts.splice(0, contacts.length); // Splice is used to modify the contents of an array by removing existing elements and / or adding new elements.
    console.log("The contact list was cleared");
clear(); // Clear all contacts




