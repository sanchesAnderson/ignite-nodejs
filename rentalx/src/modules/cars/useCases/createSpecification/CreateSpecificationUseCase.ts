import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpecificationsRepository) {}
    
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findBySpecificationName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification name already exists!");
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase }