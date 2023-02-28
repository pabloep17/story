const title = document.title

const see_menu = false

if (title == "Middle-Point - A bunker story") {
    localStorage.clear()
    localStorage.setItem("views", document.title)
}

const body = document.getElementsByTagName("body")

const div = document.createElement("div")
div.setAttribute("style", "position: fixed; top: 45px; right: 10px; background: #282828; width: 220px; border-radius: 10px; padding: 10px; color: #d6d3d0; display: none; margin: 0px; z-index: 1;")
div.setAttribute("id", "menu")
div.setAttribute("class", "text")
body[0].appendChild(div)
const nav = document.createElement("nav")
nav.setAttribute("style", "width: 100%; height: 40px; display: flex; align-items: center; background-color: #282828; color: white; font-family: SF-Bold; font-size: larger; position: fixed; top: 0px; z-index: 1;")
nav.setAttribute("id", "nav")
body[0].appendChild(nav)

const navbar = document.getElementById("nav")
navbar.innerHTML = `
    <span style="position: absolute; left: 10px;"><a style="text-decoration: none; color: white" href="https://nafdez.github.io/middle-point-interactive/">Middle-Point</a></span>
    <span style="display: flex;justify-content: center; align-items: center; width: 100%;">${title != "Middle-Point" ? title : ""}</span>
    ${see_menu == true ? `<span style="position: absolute; right: 10px; cursor: pointer;" id="menu_view"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg></span>` : ""}    
`

const view = localStorage.getItem("views")

localStorage.setItem("views", `${view != null ? view+"/" : "Middle-Point/" }${document.title}`)

const views = localStorage.getItem("views")

const menu = document.getElementById('menu_view')

var menu_view_state = false

const menu_function = async() =>  {
    const menu = document.getElementById('menu')
    if (!menu_view_state) {
        menu.style.display = "block"
        const viewArr = views.split("/")
        viewArr.forEach((e) => {
            const p = document.createElement("p")
            p.setAttribute("id", `view-${e}`)
	        //p.setAttribute("style", "display: flex; align-items: center; justify-content: flex-start;")
            menu.appendChild(p)
            document.getElementById(`view-${e}`).innerHTML = e
        })
        menu_view_state = true
    }else{
        menu.style.display = "none"
        menu_view_state = false
    }
}


menu.addEventListener("click", menu_function)
