let URL = "http://localhost:3000/entries"
const API = {
  getJournalEntries () {
    return fetch(URL)
      .then(entries => entries.json())
  },
  postJournalEntries (entry) {
    return fetch(URL, { 
       method: "POST",
       headers: {
           "Content-Type": "application/json"
       },
       body: JSON.stringify(entry)
   })
   }
}

export default API;