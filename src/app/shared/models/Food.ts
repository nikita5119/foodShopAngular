export class Food{
    // constructor(id:number){
    //     this.id=id;
    // }
    id!:number;//this id id conpulsory bhancha ! le when constructing Food object
    //! //? optional //default id:number = 0;
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean =false;
    stars:number=0;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;



}