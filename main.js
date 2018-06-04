

const myName = "Lauren"

const articleHeader = document.querySelector(".article__header")
articleHeader.textContent = `Welcome the ${myName} blog`

const articleHeaders = document.querySelectorAll(".article__header")

for (let i = 0; i < articleHeaders.length; i++) {
  articleHeaders[i].classList.add("important")

}





