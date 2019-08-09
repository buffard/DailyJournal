const journalEntry = [
  {
    date: "07/24/2018",
    concept: "Array methods",
    entry: "We learned about array methods, but only forEach made sense",
    mood: "Ok"
  },
  {
    date: "10/22/2018",
    concept: "Do I Work",
    entry: "I just want this to work, then I'll understand",
    mood: "Happy"
  }
]

const makeJournalEntryComponent = (journalEntry) => {
  // Create your own HTML structure for a journal entry
  return `  <div class="insertedEntry">
      <h1 class="pubConcept">${journalEntry.concept}</h1>
      <h3 class='pubDate'>${journalEntry.date}</h3>
      <p class='pubEntry'>${journalEntry.entry}</p>
      <p class='mood'>${journalEntry.mood}</p>
    </div>`
}
/*
    Purpose: To render all journal entries to the DOM
    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
  console.log("Here")
  entries.forEach(obj => {
    document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(obj)
  })
}

// Invoke the render function
renderJournalEntries(journalEntry)