import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "NodeJs",
        educator: "Anderson",
        duration: 10
    });

    CreateCourseService.execute({
        name: "ReactJs",
        duration: 20
    });

    return response.send();
}