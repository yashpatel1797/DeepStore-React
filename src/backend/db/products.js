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
    description: "Wings of Fire: An Autobiography of APJ Abdul Kalam, former President of India. It was written by Dr. Abdul Kalam and Arun Tiwari. Dr. Kalam examines his early life, effort, hardship, fortitude, luck and chance that eventually led him to lead Indian space research, nuclear and missile programs.",
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
    description: "Steve Jobs is the authorized self-titled biography of American business magnate and Apple co-founder Steve Jobs. The book was written at the request of Jobs by Walter Isaacson, a former executive at CNN and TIME who has written best-selling biographies of Benjamin Franklin and Albert Einstein.",
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
    description: "Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people.Money—investing, personal finance, and business decisions—is typically taught as a math-based field, where data and formulas tell us exactly what to do.",
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
    description: "One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results.Deep Work is an indispensable guide to anyone seeking focused.",
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
    description: "The #1 New York Times bestseller. Over 4 million copies sold!Tiny Changes, Remarkable ResultsNo matter your goals, Atomic Habits offers a proven framework for improving--every day.",
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
    description: "Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake Masters.",
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
    description: "Rich Dad Poor Dad is a 1997 book written by Robert T. Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence.",
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
    description: "Think and Grow Rich is a book written by Napoleon Hill in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie.",
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
    description: "Fire & Blood is a fantasy book by American writer George R. R. Martin. It tells the history of House Targaryen, a family from his series A Song of Ice and Fire.",
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
    description: "The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.",
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
    description: "A Man Called Ove is a novel by Swedish writer Fredrik Backman published by Forum in 2012. The novel was published in English in 2013 and reached the New York Times Best Seller list 18 months after its publication and stayed on the list for 42 weeks.",
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
    description: "Einstein: His Life and Universe is a non-fiction book authored by American historian and journalist Walter Isaacson.",
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
