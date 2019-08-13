import makeJournalEntryComponent from './entryComponent.js'

const insertEntry = {
  insertHtml(entries) {
    entries.forEach(obj => {
      return document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent.createHTML(obj)
    })
  }
}

export default insertEntry;