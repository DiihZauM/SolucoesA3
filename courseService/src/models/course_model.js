class Course {
    constructor(id, author, image, avatarAuthor, description, specialization, title) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.specialization = specialization;
        this.image = image;
        this.avatarAuthor = avatarAuthor;
    }

}

module.exports = Course;