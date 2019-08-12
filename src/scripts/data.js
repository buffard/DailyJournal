let URL = "http://localhost:3000/entries"
const API = {
  getJournalEntries () {
    return fetch(URL)
      .then(entries => entries.json())
  }
}