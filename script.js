"use strict"
var books = {}

$(document).ready(
  function() {
    $.ajax("http://www.mocky.io/v2/5ed40369340000650001f5a0", {
      success: (response) => {
        try {
          books = response.books
          func1()
        } catch (e) {
          console.log(e)
        }
      },
      error: (e) => {
        console.log(e)
      }
    })
})

const insertTableRow = (id = 0, title = "", author = "") => {
  const row = document.getElementById("nucleus").insertRow()
  const idCell = row.insertCell(0)
  const titleCell = row.insertCell(1)
  const authorCell = row.insertCell(2)
  idCell.innerHTML = id
  titleCell.innerHTML = title
  authorCell.innerHTML = author
}

const updateCaption = (x, y, z) => {
  document.getElementById("nucleusCaption").innerHTML = "Displaying book results " + x + " - " + y + " of " + z
}

const next = () => {
  const nextPage = parseInt($("#activePage").val(), 10) + 1
  const npSelector = "#" + nextPage
  $(npSelector).click()
}

const previous = () => {
  const prevPage = parseInt($("#activePage").val(), 10) - 1
  const ppSel = "#" + prevPage
  $(ppSel).click()
}

const func1 = () => {
  disablePrevious()
  enableNext()
  $("#activePage").val(1)
  displayNucleus(books.slice(0,6))
  updateCaption(1, 6, 20)
}
const func2 = () => {
  enablePrevious()
  enableNext()
  $("#activePage").val(2)
  displayNucleus(books.slice(6,12))
  updateCaption(7, 12, 20)
}
const func3 = () => {
  enablePrevious()
  enableNext()
  $("#activePage").val(3)
  displayNucleus(books.slice(12,18))
  updateCaption(13, 18, 20)
}
const func4 = () => {
  enablePrevious()
  disableNext()
  $("#activePage").val(4)
  displayNucleus(books.slice(18,20))
  updateCaption(19, 20, 20)
}

const disablePrevious = () => {
  if(!$("#previous").hasClass("disabled")) {
    $("#previous").replaceWith("<li id='previous' class='page-item disabled'><span class='page-link'>Previous</span></li>")
  }
}

const enablePrevious = () => {
  if($("#previous").hasClass("disabled")) {
    $("#previous").replaceWith("<li id='previous' class='page-item' onclick='previous()'><a class='page-link' href='#nucleus'>Previous</a></li>")
  }
}

const disableNext = () => {
  if(!$("#next").hasClass("disabled")) {
    $("#next").replaceWith("<li id='next' class='page-item disabled'><span class='page-link'>Next</span></li>")
  }
}

const enableNext = () => {
  debugger
  if($("#next").hasClass("disabled")) {
    $("#next").replaceWith("<li id='next' onclick='next()' class='page-item'><a class='page-link' href='#nucleus'>Next</a></li>")
  }
}

const displayNucleus = (books = []) => {
  $("#nucleus").replaceWith("<table class='table' id='nucleus'><caption id='nucleusCaption'></caption><tr><th>ID</th><th>Title</th><th>Author</th></tr></table>")
  books.forEach(book => {
    insertTableRow(book.bookId, book.title, book.authorName)    
  })
}

// [
//   {
//       "bookId": "1",
//       "title": "A",
//       "authorName": "A auth"
//   },
//   {
//       "bookId": "2",
//       "title": "B",
//       "authorName": "B auth"
//   },
//   {
//       "bookId": "3",
//       "title": "C",
//       "authorName": "C auth"
//   },
//   {
//       "bookId": "4",
//       "title": "D",
//       "authorName": "D auth"
//   },
//   {
//       "bookId": "5",
//       "title": "E",
//       "authorName": "E auth"
//   },
//   {
//       "bookId": "6",
//       "title": "F",
//       "authorName": "F auth"
//   },
//   {
//       "bookId": "7",
//       "title": "G",
//       "authorName": "G auth"
//   },
//   {
//       "bookId": "8",
//       "title": "H",
//       "authorName": "H auth"
//   },
//   {
//       "bookId": "9",
//       "title": "I",
//       "authorName": "I auth"
//   },
//   {
//       "bookId": "10",
//       "title": "J",
//       "authorName": "J auth"
//   },
//   {
//       "bookId": "11",
//       "title": "K",
//       "authorName": "K auth"
//   },
//   {
//       "bookId": "12",
//       "title": "L",
//       "authorName": "L auth"
//   },
//   {
//       "bookId": "13",
//       "title": "M",
//       "authorName": "M auth"
//   },
//   {
//       "bookId": "14",
//       "title": "N",
//       "authorName": "N auth"
//   },
//   {
//       "bookId": "15",
//       "title": "O",
//       "authorName": "O auth"
//   },
//   {
//       "bookId": "16",
//       "title": "P",
//       "authorName": "P auth"
//   },
//   {
//       "bookId": "17",
//       "title": "Q",
//       "authorName": "Q auth"
//   },
//   {
//       "bookId": "18",
//       "title": "R",
//       "authorName": "R auth"
//   },
//   {
//       "bookId": "19",
//       "title": "S",
//       "authorName": "S auth"
//   },
//   {
//       "bookId": "20",
//       "title": "T",
//       "authorName": "T auth"
//   }
// ]
