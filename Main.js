function changBackgroundColor(){
    let colors = ['red','green','yellow','orange','pink']
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = randomColor
}

