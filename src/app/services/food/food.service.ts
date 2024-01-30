import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getFoodById(id:number):Food{
  return this.getAll().find(food => food.id ==id)!;
}
getAllFoodBySearchTerm(searchTerm:string):Food[]{
  return this.getAll().filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
  getAllTags():Tag[]{
    return[
      {name:"All", count:14},
      {name:"FastFood", count:4},
      {name:"Pizza", count:1},
      {name:"Lunch", count:3},
      {name:"Hamburger", count:1},
      {name:"Fry", count:9},
      {name:"Spicy", count:7},
      {name:"Pasta", count:7},
    ];
  }
  // getAll():String[]{
  //   return[
  //     '/assets/images/food-1.jpg',
  //     '/assets/images/food-2.jpg',
  //     '/assets/images/food-3.jpg',
  //     '/assets/images/food-4.jpg',
  //     '/assets/images/food-5.jpg',
  //     '/assets/images/food-6.jpg',
  //   ]
  // }

getAllFoodsByTag(tag1:string):Food[]{
 
  if(tag1 == "All"){
    console.log("return all foods");
    return this.getAll();

  }
  else{
    console.log('Filtered foods:', tag1);
    return this.getAll().filter(food => food.tags?.includes(tag1));
    

  }
}


  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Ham Burger',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['SlowFood', 'Lunch', 'Hamburger'],
      },
      {
        id: 3,
        name: 'Carbonara Pasta',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/food-3.jpg',
        tags: ['FastFood', 'Pasta'],
      },
      {
        id: 4,
        name: 'Chicken Momo',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Chowmein',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/food-5.jpg',
        tags: ['Fastfood', 'Spicy'],
      },
      {
        id: 6,
        name: 'Nepali thali',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['SlowFood', 'Pizza', 'Lunch'],
      },
    ];
  }
}
