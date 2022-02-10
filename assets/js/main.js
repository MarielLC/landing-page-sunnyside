const buttonMenu = document.querySelector("#icon-menu")
const menu = document.querySelector("#menu")

const toggleMenu = () => {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active")
    } else {
        menu.classList.add("active")
    }
}

const toggleElement = (element,nameClass) => {
    element.classList.toggle(nameClass)
}
buttonMenu.addEventListener("click",  () => {
    toggleElement(menu,"active")
})