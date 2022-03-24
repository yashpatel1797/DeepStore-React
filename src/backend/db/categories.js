import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Fiction",
    image: "https://media.istockphoto.com/photos/magic-book-open-picture-id1203194312?b=1&k=20&m=1203194312&s=170667a&w=0&h=3WIO-jDdGsW_51t2x8vU8GYaMkCrYdlr7Ej-L2GjTqg=",
  },
  {
    _id: uuid(),
    categoryName: "Biography",
    image: "https://media.istockphoto.com/photos/text-my-story-typed-on-retro-typewriter-picture-id857775398?b=1&k=20&m=857775398&s=170667a&w=0&h=AdOkgu0SZ13eeKGh4ZnLxN7UPEVDrUMzYYP18XC_-xg=",
  },
  {
    _id: uuid(),
    categoryName: "Self-help",
    image: "https://images.unsplash.com/reserve/YEc7WB6ASDydBTw6GDlF_antalya-beach-lulu.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaXRhdGlvbiUyMGZvY3VzJTIwYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: uuid(),
    categoryName: "Finance",
    image: "https://images.unsplash.com/photo-1565514417878-a66a6b0f2c7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5jZSUyMGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];
