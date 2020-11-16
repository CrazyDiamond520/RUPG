class Renderer {
    renderUserData(userInfo){
        const source = $("#mainUser").html()
        const template = Handlebars.compile(source)
        const userDataHTML = template(userInfo)
        $(".user-container").empty().append(userDataHTML)

    }
    
    renderKanye(kq){
        const source2 = $("#quote").html()
        const template2 = Handlebars.compile(source2)
        const kanyeHTML = template2(kq)
        $(".quote-container").empty().append(kanyeHTML)
    }

    renderMeat(meat){
        const source3 = $("#meat").html()
        const template3 = Handlebars.compile(source3)
        const meatHTML = template3({meat})
        $(".meat-container").empty().append(meat)
    }

    renderUsers(users){
        const source4 = $("#users").html()
        const template4 = Handlebars.compile(source4)
        const usersHTML = template4({users})
        $(".friends-container").empty().append(usersHTML)
    }




}


