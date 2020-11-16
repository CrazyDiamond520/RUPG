//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {
      userInfo: {},
      users: [],
    };
  }
  userData() {
    $.ajax({
      method: "GET",
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: (data) => {
        this.data.userInfo.firstName = data.results[0].name.first;
        this.data.userInfo.lastName = data.results[0].name.last;
        this.data.userInfo.title = data.results[0].name.title;
        this.data.userInfo.image = data.results[0].picture.medium;
        this.data.userInfo.location = data.results[0].location.city;
      },
    });
  }

  kanye() {
    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest",
      dataType: "json",
      success: (data) => {
        this.data.kq = data;
      },
    });
  }

  pokemon() {} //api is not valid

  meat() {
    $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      dataType: "json",
      success: (data) => {
        this.data.meat = data;
      },
    });
  }

  users() {
    $.ajax({
      method: "GET",
      url: "https://randomuser.me/api/?results=7",
      dataType: "json",
      success: (data) => {
        this.users = data.results.map((u) => {
          return { firstName: u.name.first, lastName: u.name.last };
        });
      },
    });
  }
}

