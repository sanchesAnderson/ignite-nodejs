import { Request, Response } from "express";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


class ListCategoryController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
    handle(request: Request, response: Response): Response {
        const allCategories = this.listCategoriesUseCase.execute();
        
        return response.json(allCategories);
    }
}

export { ListCategoryController }