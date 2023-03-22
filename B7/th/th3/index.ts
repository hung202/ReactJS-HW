
class User {
    private name: string;
    username: string;
    password: string;
    constructor(name: string, username: string, password: string) {
        this.name = name;
        this.username = username;
        this.password = password;
    }

    login(username: string, password: string) {
        if (username === this.username && password === this.password) {
            console.log('Login Successfully')
        } else {
            console.log('Authentication Failed!!');
        }
    }

    setPassword(newPassword: string) {
        let isValid = false;
        isValid = this.validateUsernameOrPassword(newPassword);
        if (isValid) {
            this.password = newPassword
        } else {
            console.log('Password not valid');
        }
    }

    validateUsernameOrPassword(text: string): boolean {
        if (text.length > 6) {
            return true;
        }
        return false;
    }
};
let user1 = new User('user1', 'user1', '123456');

console.log(user1.username);
user1.login('user1', '123456')
user1.setPassword('123456');

class Author extends User {
    numOfPost: number;
    email: string;
    constructor(email: string, name: string, username: string, password: string) {
        super(name, username, password);
        this.email = email;
        this.numOfPost = 0;
    }
    login(username: string, password: string) {
        if (username === this.username && password === this.password) {
            console.log('Author login Successfully')
        } else {
            console.log('Author authentication Failed!!');
        }
    }
    createPost() {
        this.numOfPost++;
    }

    getNumOfPost() {
        return this.numOfPost;
    }
}

let author1 = new Author('ex@gmail.com', 'author1', 'author1', '1234567');
console.log(author1.email);
author1.login('author1', '1234567');