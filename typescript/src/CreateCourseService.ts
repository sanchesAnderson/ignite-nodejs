/**
 * name - string
 * duration - number
 * educator - string
 * ? optional field
 */

interface Course {
    name: string;
    duration?: number;
    educator?: string;
}

class CreateCourseService {
    execute({ duration, educator = "Joseph", name } : Course) {
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService();