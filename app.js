const comments = []
const d = new Date()

document.getElementById("comment-btn").addEventListener("click", function(e) {
    e.preventDefault()
    comments.unshift(
        {
        name: document.getElementById("name-el").value,
        comment: document.getElementById("comment-el").value,
        date: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
        }) 
    document.getElementById("name-el").value = ""
    document.getElementById("comment-el").value = ""
    render()  
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