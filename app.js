

document.getElementById("comment-btn").addEventListener("click", function(e) {
    e.preventDefault()
    comments.unshift(
        {
            name: document.getElementById("name-el").value,
            comment: document.getElementById("comment-el").value
        })
    
    console.log(comments)
       
})

const comments = []

