const makeJournalEntryComponent = {
  createHTML(journalEntry) { 
  // Create HTML structure for a journal entry
  return `  <div class="insertedEntry">
      <h1 class="pubConcept">${journalEntry.concept}</h1>
      <h3 class='pubDate'>${journalEntry.date}</h3>
      <p class='pubEntry'>${journalEntry.entry}</p>
      <p class='mood'>${journalEntry.mood}</p>
    </div>`
}}

export default makeJournalEntryComponent;