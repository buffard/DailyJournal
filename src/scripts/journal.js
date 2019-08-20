import API from "./data.js"
import insertEntry from "./entriesDOM.js"

API.getJournalEntries().then(data => insertEntry.insertHtml(data))

let postDate = document.querySelector("#postDate").value
let concepts = document.querySelector("#concepts").value
let entry = document.querySelector("#entry")
let mood = document.querySelector("#mood")
let submitBtn = document.querySelector("#submit")

submitBtn.addEventListener('click', () => {
  
  console.log(concepts)
})

const createEntry = (postDate) => {
  return{
    postDate: postDate.postDate
  }
}



