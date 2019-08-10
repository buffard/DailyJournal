entries.forEach(obj => {
  document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(obj)
})