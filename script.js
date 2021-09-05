document.querySelector("#items")
.addEventListener("wheel", event => {
    if(event.deltaY > 0) {
        console.log("scroll up")
        } else {
            console.log("scroll down")
        }
})