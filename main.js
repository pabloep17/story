const title = document.title

const see_menu = true

const navbar = document.getElementById("nav")
navbar.innerHTML = `
    <span class="app_name"><a href="https://pabloep17.github.io/story/">Middle-Point</a></span>
    <span class="center max-width">${title != "Middle-Point" ? title : ""}</span>
    ${see_menu == true ? `<span class="menu" id="menu_view"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg></span>` : ""}    
`

if (title == "Middle-Point") {
    localStorage.clear()
    localStorage.setItem("views", document.title)
}

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