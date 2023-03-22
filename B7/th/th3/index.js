var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
    User.prototype.login = function (username, password) {
        if (username === this.username && password === this.password) {
            console.log('Login Successfully');
        }
        else {
            console.log('Authentication Failed!!');
        }
    };
    User.prototype.setPassword = function (newPassword) {
        var isValid = false;
        isValid = this.validateUsernameOrPassword(newPassword);
        if (isValid) {
            this.password = newPassword;
        }
        else {
            console.log('Password not valid');
        }
    };
    User.prototype.validateUsernameOrPassword = function (text) {
        if (text.length > 6) {
            return true;
        }
        return false;
    };
    return User;
}());
;
var user1 = new User('user1', 'user1', '123456');
console.log(user1.username);
user1.login('user1', '123456');
user1.setPassword('123456');
var Author = /** @class */ (function (_super) {
    __extends(Author, _super);
    function Author(email, name, username, password) {
        var _this = _super.call(this, name, username, password) || this;
        _this.email = email;
        _this.numOfPost = 0;
        return _this;
    }
    Author.prototype.login = function (username, password) {
        if (username === this.username && password === this.password) {
            console.log('Author login Successfully');
        }
        else {
            console.log('Author authentication Failed!!');
        }
    };
    Author.prototype.createPost = function () {
        this.numOfPost++;
    };
    Author.prototype.getNumOfPost = function () {
        return this.numOfPost;
    };
    return Author;
}(User));
var author1 = new Author('ex@gmail.com', 'author1', 'author1', '1234567');
console.log(author1.email);
author1.login('author1', '1234567');
