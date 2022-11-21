export interface CourseType{
    id: string,
    author : string,
    image : string,
    avatarAuthor : string,
    description : string,
    specialization : Array<string>,
    title : string,
}

export interface ModuleType {
    courseId: string,
    moduleId: string,
    name: string,
    lessons: Array<Lessons>
}

export interface Lessons{
    lessonKey: string,
    moduleId: string,
    title: string,
    videosource: string
}
