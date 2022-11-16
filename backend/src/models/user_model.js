class User {
    constructor(id, name, email, age, gender, crm, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.gender = gender;
        this.crm = crm;
        this.password = password;
    }
}

module.exports = User;