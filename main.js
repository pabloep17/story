console.log(document.title)

const view = localStorage.getItem("views")

localStorage.setItem("views", `${view != null ? view+"/" : "Middle-Point/" }${document.title}`)

const views = localStorage.getItem("views")

const menu = document.getElementById('menu_view')

var menu_view_state = false

const menu_function = async() =>  {
    const menu = document.getElementById('menu')
    if (!menu_view_state) {
        menu.style.display = "block"
        console.log(localStorage)
        const viewArr = views.split("/")
        console.table(viewArr)
        viewArr.forEach((e) => {
            const span = document.createElement("p")
            span.setAttribute("id", `view-${e}`)
            menu.appendChild(span)
            document.getElementById(`view-${e}`).innerHTML = e
        })
        menu_view_state = true
    }else{
        menu.style.display = "none"
        menu_view_state = false
    }
}


menu.addEventListener("click", menu_function)