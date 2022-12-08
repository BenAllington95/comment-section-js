const comments = []
const nameEl = document.getElementById("name-el")
const commentEl = document.getElementById("comment-el")


document.getElementById("comment-btn").addEventListener("click", function(e) {
    e.preventDefault()
    const d = new Date()
    
    if (nameEl.value && commentEl.value) {
        comments.unshift(
            {
            name: nameEl.value,
            comment: commentEl.value,
            date: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
            })  
            render() 
    }
    
    nameEl.value = ""
    commentEl.value = ""
})


const generateHtmlComments = () => {
    const htmlString = comments.map(comment =>
         `<div class="comment">
            <h3>${comment.name}</h3>
            <p>${comment.date}</p>
            <p>"${comment.comment}"</p>
        </div>`
    ).join('')

    return htmlString
}

const render = () => {
    document.getElementById("feed").innerHTML = generateHtmlComments()
}

render()