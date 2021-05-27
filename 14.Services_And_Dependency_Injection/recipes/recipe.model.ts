import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(
        _name: string,
        _description: string,
        _imagePath: string,
        _ingredients: Ingredient[]
    ) {
        this.name = _name;
        this.description = _description;
        this.imagePath = _imagePath;
        this.ingredients = _ingredients;
    }
}
