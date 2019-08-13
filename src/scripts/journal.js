import API from "./data.js"
import insertEntry from "./entriesDOM.js"

API.getJournalEntries().then(data => insertEntry.insertHtml(data))



