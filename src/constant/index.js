import { profile, search, cart, upLine, downLine, heartFill, heartLight, truck, wheat, bagutte, cheifHat, facebook, instagram, twitter } from "../assets/icons"

import logoMain from "../assets/images/logo_main.png";
import logoSub from "../assets/images/logo_sub.png";
/* |==========|==========|==========|==========|==========|==========|==========|==========| */
/* |==========|==========|==========|==========|==========|==========|==========|==========| */
import avatar1 from "../assets/avatar/avatar_1.png";
import avatar2 from "../assets/avatar/avatar_2.png";
import avatar3 from "../assets/avatar/avatar_3.png";
import avatar4 from "../assets/avatar/avatar_4.png";
import avatar5 from "../assets/avatar/avatar_5.png";
import avatar6 from "../assets/avatar/avatar_6.png";
import avatar7 from "../assets/avatar/avatar_7.png";
import avatar8 from "../assets/avatar/avatar_8.png";
/* |==========|==========|==========|==========|==========|==========|==========|==========| */
/* |==========|==========|==========|==========|==========|==========|==========|==========| */
import homeBg1 from "../assets/images/home_bg1.jpg";
import homeBg2 from "../assets/images/home_bg2.jpg";
import homeBg3 from "../assets/images/home_bg3.jpg";

import homePhBg1 from "../assets/images/homeph_bg1.png";
import homePhBg2 from "../assets/images/homeph_bg2.png";
import homePhBg3 from "../assets/images/homeph_bg3.png";

import homeCafe1 from "../assets/images/home_cafe1.jpg";
import homeCafe2 from "../assets/images/home_cafe2.jpg";
import homeCafe3 from "../assets/images/home_cafe3.jpg";
import homeCafe4 from "../assets/images/home_cafe4.jpg";
import homeCafe5 from "../assets/images/home_cafe5.jpg";
import homeCafe6 from "../assets/images/home_cafe6.jpg";

import homeFood from "../assets/images/home_food.jpg";
import homeCoffee from "../assets/images/home_coffee.jpg";
import homeEating from "../assets/images/home_eating.jpg";
/* |==========|==========|==========|==========|==========|==========|==========|==========| */
/* |==========|==========|==========|==========|==========|==========|==========|==========| */
import aboutAward1 from "../assets/images/about_award1.png";
import aboutAward2 from "../assets/images/about_award2.png";
import aboutBg from "../assets/images/about_bg.jpg";
import aboutChief from "../assets/images/about_cheif.jpg";
import aboutIngrident from "../assets/images/about_ingrident.jpg";
/* |==========|==========|==========|==========|==========|==========|==========|==========| */
/* |==========|==========|==========|==========|==========|==========|==========|==========| */
import menuFood1 from "../assets/images/menu_food1.png";
import menuFood2 from "../assets/images/menu_food2.png";
import menuFood3 from "../assets/images/menu_food3.png";
import menuFood4 from "../assets/images/menu_food4.png";
import menuFood5 from "../assets/images/menu_food5.png";
import menuFood6 from "../assets/images/menu_food6.png";
/* |==========|==========|==========|==========|==========|==========|==========|==========| */
/* |==========|==========|==========|==========|==========|==========|==========|==========| */

export const navigation = {
  logo:{
    imgURL:logoMain,
    href:"/",
  },
  links:[
    { label:"Home", href:"/", addIcon: false, },
    { label:"About Us", href:"aboutus", addIcon: false, },
    { label:"Menu", href:"menu", addIcon: false, },
    // { label:"Cart", href:"cart", addIcon: false, },
    // { label:"Contact", href:"contact", addIcon: false, },
    // { label:"Sign In", href:"signin", addIcon: true, },
  ],
  profile:{imgURL: profile}
};

export const landing = {
  main:{
    heading1:"Your Go-to Spot for",
    heading2:"Delicious Eats & Coffee",
    subHeading:"Cafe & Restaurant Est. 2035",
    href1:"/",
    href2:"/",
    button1:"Order Now",
    button2:"Our Menu",
  },
  bg:{
    img1:homeBg1,
    img2:homeBg2,
    img3:homeBg3,
  },
  phBg:{
    img1:homePhBg1,
    img2:homePhBg2,
    img3:homePhBg3,
  },
};


export const foods = [
  {
    heading:"Eat.",
    subHeading:"Breakfast, Lunch and Artisanal Pastries",
    paragraph:"I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    imgURL:homeFood,
    button:"See More",
    link:"/",
  },
  {
    heading:"Drink.",
    subHeading:"The Freshest Cup in Town ",
    paragraph:"I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    imgURL:homeCoffee,
    button:"See More",
    link:"/",
  },
  {
    heading:"Food.",
    subHeading:"Make Yourself at Home",
    paragraph:"I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    imgURL:homeEating,
    button:"See More",
    link:"/",
  },
];

export const dropBy = {
  heading:"Drop By for a Bite.",
  left:{
    subTitle:"Address",
    texts:[
      "500 Terry Francine St.",
      "San Francisco, CA 94158",
    ]
  },
  right:{
    subTitle:"Opening Hours",
    texts:[
      "Mon - Fri: 9am - 6pm",
      "Sturday: 10am - 2pm",
      "Sunday: Closed",
    ]
  }
};

export const miniGallery = [
  {imgURL: homeCafe1},
  {imgURL: homeCafe2},
  {imgURL: homeCafe3},
  {imgURL: homeCafe4},
  {imgURL: homeCafe5},
  {imgURL: homeCafe6},
];

export const footer = {
  newsletter:{
    heading:"Newsletter",
    text:["Stay up to date with all the latest from Beans and Brew"],
  },
  talkToUs:{
    heading:"Talk To Us",
    text:[
      "123-456-7890",
      "info@mysite.com​",
      "500 Terry Francine St.",
      "San Francisco, CA 94158",
    ]
  },
  socialMedia:[
    {heading: "Instagram", iconURL:instagram, link:"/"},
    {heading: "Facebook", iconURL:facebook, link:"/"},
    {heading: "Twitter", iconURL:twitter, link:"/"},
  ],
  bottomFooter:{
    text:"2035 by 47th Cafe . Powered and secured by ",
    link:"/",
  }
};

export const aboutLanding = {
  bg:aboutBg,
  title:"About Us",
  text1:"We're big believers in the power of a good meal and a friendly place to eat it.",
  text2:"Stop by for fresh, locally sourced food, served with a warm smile.",
};

export const aboutInfo = [
  {
    title:"The Best Bite in the Neighborhood",
    paragraph:"I'm an extra long title. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you",
    imgURL:aboutIngrident,
    button:"View More",
    link:"/", 
  },
  {
    title:"From Our Hearts to Your Plate",
    paragraph:"I'm an extra long title. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you",
    imgURL:aboutChief,
    button:"View More",
    link:"/", 
  },
];

export const aboutAward = [
  {
    imgURL: aboutAward1,
    title: "Award Title First",
    paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate molestiae blanditiis tenetur libero qui amet culpa! Voluptatem velit eum laudantium?"
  },
  {
    imgURL: aboutAward2,
    title: "Award Title Second",
    paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate molestiae blanditiis tenetur libero qui amet culpa! Voluptatem velit eum laudantium?"
  },
];

export const aboutQualtiy = [
  { icon:bagutte, title:"Fresh Food", text:"Cupiditate molestiae blanditiis tenetur libero qui amet culpa! Voluptatem velit eum laudantium?"},
  { icon:wheat, title:"Quality Ingridents", text:"Cupiditate molestiae blanditiis tenetur libero qui amet culpa! Voluptatem velit eum laudantium?"},
  { icon:truck, title:"Free deleviry", text:"Cupiditate molestiae blanditiis tenetur libero qui amet culpa! Voluptatem velit eum laudantium?"},
  { icon:cheifHat, title:"Expirenced Cheif", text:"Cupiditate molestiae blanditiis tenetur libero qui amet culpa! Voluptatem velit eum laudantium?"},
];

export const menu = [
  {
    productId:1,
    imgURL:menuFood1,
    label:"Boule",
    rating:4.7,
    text:"A rustic, round bread with a crisp crust and soft interior.",
    price:40,
  },
  {
    productId:2,
    imgURL:menuFood2,
    label:"Croissant",
    rating:4.8,
    text:"A flaky, buttery pastry, often crescent-shaped.",
    price:55,
  },
  {
    productId:3,
    imgURL:menuFood3,
    label:"Bagal",
    rating:4.2,
    text:"A dense, ring-shaped bread, commonly served with various toppings.",
    price:35,
  },
  {
    productId:4,
    imgURL:menuFood4,
    label:"Challah",
    rating:4.4,
    text:"A braided, slightly sweet bread in Jewish cuisine.",
    price:40,
  },
  {
    productId:5,
    imgURL:menuFood5,
    label:"Bagal",
    rating:4.3,
    text:"A dense, ring-shaped bread, commonly served with various toppings.ss",
    price:35,
  },
  {
    productId:6,
    imgURL:menuFood6,
    label:"Raspberry JamBread",
    rating:4.5,
    text:"Bread with sweet raspberry jam swirled into the dough for added flavor.",
    price:45,
  },
  
]

export const testomonial = [
  {
    imgURL:avatar1,
    name:"Mrs, Avater One",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita aliquid beatae et error aperiam.",
  },
  {
    imgURL:avatar2,
    name:"Mrs, Avater Two",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita aliquid beatae et error aperiam.",
  },
  {
    imgURL:avatar3,
    name:"Mr, Avater Three",
    text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita aliquid beatae et error aperiam.",
  },
];

// export const cart = [
//   {
//     productId:0,
//     label:"Bread",
//     price:10,
//     quantity:3,
//     total:10*3,
//   }
// ]

