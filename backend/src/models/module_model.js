class Module {
    constructor(courseId,moduleId,name,lessons) {
        this.courseId =  courseId,
        this.moduleId =  moduleId,
        this.name =  name,
        this.lessons =  this.mapLessons(lessons)
    }
    mapLessons(lessons) {
        let lessonsMapped = []
        lessons.forEach(lesson => {
            let dummyLesoon = new lesson(
                this.lessonId,
                this.moduleId,
                this.title,
                this.videosource
            )
            lessonsMapped.push(dummyLesoon)
        });
        return lessonsMapped
    }
}

module.exports = Module;