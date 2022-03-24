import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Wings of fire",
    author: "A. P. J. Abdul Kalam",
    description: "",
    price: "270",
    category: "Biography",
    best_selling: "true",
    new_arrival: "false",
    original_price: "300",
    discount: "10",
    image: "https://m.media-amazon.com/images/I/51vgy3LMz6L._AC_UY327_FMwebp_QL65_.jpg",
    rating: {
      rate: "4",
      count: "10"
    }
  },
  {
    _id: uuid(),
    title: "Steve Jobs",
    author: "Walter Isaacson",
    description: "",
    price: "248",
    category: "Biography",
    best_selling: "false",
    new_arrival: "false",
    original_price: "310",
    discount: "20",
    image: "https://m.media-amazon.com/images/I/41n1edvVlLL._AC_UY327_FMwebp_QL65_.jpg",
    rating: {
      rate: "3",
      count: "15"
    }
  },
  {
    _id: uuid(),
    title: "The Psychology of money",
    author: "Morgan Housel",
    description: "",
    price: "329",
    category: "Finances",
    best_selling: "true",
    new_arrival: "false",
    original_price: "399",
    discount: "18",
    image: "https://m.media-amazon.com/images/I/81C0rgkaoGL._AC_UY327_FMwebp_QL65_.jpg",
    rating: {
      rate: "4",
      count: "20"
    }
  },
  {
    _id: uuid(),
    title: "Deep Work",
    author: "Cal Newport",
    description: "",
    price: "313",
    category: "Self-Help",
    best_selling: "false",
    new_arrival: "false",
    original_price: "399",
    discount: "22",
    image: "https://m.media-amazon.com/images/I/411r+u9cd7L._AC_UY327_FMwebp_QL65_.jpg",
    rating: {
      rate: "3",
      count: "25"
    }

  },
  {
    _id: uuid(),
    title: "Atomic Habits",
    author: "James Clear",
    description: "",
    price: "540",
    category: "Self-Help",
    best_selling: "false",
    new_arrival: "true",
    original_price: "799",
    discount: "32",
    image: "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    rating: {
      rate: "5",
      count: "10"
    }
  },
  {
    _id: uuid(),
    title: "Zero to One",
    author: "Peter Thiel",
    description: "",
    price: "309",
    category: "Finances",
    best_selling: "false",
    new_arrival: "false",
    original_price: "599",
    discount: "48",
    image: "https://m.media-amazon.com/images/I/71m-MxdJ2WL._AC_UY327_FMwebp_QL65_.jpg",
    rating: {
      rate: "5",
      count: "10"
    }
  },
  {
    _id: uuid(),
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    description: "",
    price: "277",
    category: "Finances",
    best_selling: "false",
    new_arrival: "false",
    original_price: "499",
    discount: "44",
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UY327_FMwebp_QL65_.jpg",
    rating: {
      rate: "3",
      count: "15"
    }
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    description: "",
    price: "99",
    category: "Self-Help",
    best_selling: "false",
    new_arrival: "false",
    original_price: "199",
    discount: "50",
    image: "https://images-eu.ssl-images-amazon.com/images/I/71AdHA+qqwL._AC_UL160_SR160,160_.jpg",
    rating: {
      rate: "2",
      count: "10"
    }
  },
  {
    _id: uuid(),
    title: "Fire and Blood",
    author: "George R.R. Martin",
    description: "",
    price: "499",
    category: "Fiction",
    best_selling: "true",
    new_arrival: "false",
    original_price: "999",
    discount: "55",
    image: "https://m.media-amazon.com/images/I/91iMu22uEWL._AC_UY327_FMwebp_QL65_.jpg",
    rating: {
      rate: "4",
      count: "15"
    }
  },
  {
    _id: uuid(),
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "",
    price: "195",
    category: "Fiction",
    best_selling: "false",
    new_arrival: "true",
    original_price: "350",
    discount: "44",
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UY327_FMwebp_QL65_.jpg",
    rating: {
      rate: "1",
      count: "5"
    }
  },
  {
    _id: uuid(),
    title: "A Man Called Ove",
    author: "Fredrik Backman",
    description: "",
    price: "270",
    category: "Fiction",
    best_selling: "false",
    new_arrival: "true",
    original_price: "399",
    discount: "32",
    image: "https://m.media-amazon.com/images/I/916fuxlx90L._AC_UL480_FMwebp_QL65_.jpg",
    rating: {
      rate: "2",
      count: "10"
    }
  },
  {
    _id: uuid(),
    title: "Einstein: His Life and Universe",
    author: "Walter Isaacson",
    description: "",
    price: "624",
    category: "Biography",
    best_selling: "false",
    new_arrival: "false",
    original_price: "740",
    discount: "16",
    image: "https://m.media-amazon.com/images/I/71IIC0n4cBL._AC_UY327_FMwebp_QL65_.jpg",
    rating: {
      rate: "4",
      count: "30"
    }
  }

];
