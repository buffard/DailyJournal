// fetch("http://localhost:3000/entries") 
//     .then(entries => entries.json())  // Parse as JSON
//     .then(entries => {
//         // What should happen when we finally have the array?
//         entries.forEach(obj => {
//           document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(obj)
//         })
//     })

const API = {
  getJournalEntries () {
    return fetch("http://localhost:3000/entries")
      .then(entries => entries.json())
  }
}