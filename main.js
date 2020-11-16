const user = new APIManager
const renderer = new Renderer

$("#load").on("click", () => {
    user.userData()
    user.kanye()
    user.meat()
    user.users()
})

$("#display").on("click", () => {
    renderer.renderUserData(user.data.userInfo)
    renderer.renderKanye(user.data.kq)
    renderer.renderMeat(user.data.meat[0])
    renderer.renderUsers(user.users)
})