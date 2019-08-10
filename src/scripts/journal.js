/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries().then(makeJournalEntryComponent())


// fetch("http://localhost:3000/entries") 
//     .then(entries => entries.json())  // Parse as JSON
//     .then(entries => {
//         // What should happen when we finally have the array?
//         entries.forEach(obj => {
//           document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(obj)
//         })
//     })

// const makeJournalEntryComponent = (journalEntry) => {
//   // Create your own HTML structure for a journal entry
//   return `  <div class="insertedEntry">
//       <h1 class="pubConcept">${journalEntry.concept}</h1>
//       <h3 class='pubDate'>${journalEntry.date}</h3>
//       <p class='pubEntry'>${journalEntry.entry}</p>
//       <p class='mood'>${journalEntry.mood}</p>
//     </div>`
// }

