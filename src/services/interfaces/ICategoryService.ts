import {ICategory} from "../../interfaces/ICategory";


export interface ICategoryService{
    createCategory(request:ICategory):Promise<ICategory>;
    getAllCategory():Promise<ICategory[]>;
    getCategoryById(id:String):Promise<ICategory | Object>;
    updateCategory(id:String,product:ICategory):Promise<ICategory | Object>;
    deleteCategory(id:String):Promise<ICategory | Object>;
    getProductsByCategory(id:string):Promise<ICategory | Object>;
    updateCategoryStatus(id:String,status:string):Promise<ICategory | Object>;

}