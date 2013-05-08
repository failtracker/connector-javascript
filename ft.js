var FT = function (token) {

    if (!token) {
        throw "You need to setup your project token.";
    }

    this.token = token;
    this.url = "http://failtracker-rest.herokuapp.com/fail/insert";

    this.send = function (title, content, callback) {

        var d = new Date();
        var ms = d.getTime();

        var params = {
            "title": title,
            "content": content,
            "token": this.token,
            "date": ms
        }

        var http = new XMLHttpRequest();
        http.open("POST", this.url, true);

        http.setRequestHeader("Content-type", "application/json");
        http.onreadystatechange = function () {
            if (callback) {
                callback(http.response);
            }
        }

        http.send(JSON.stringify(params));
    }
}