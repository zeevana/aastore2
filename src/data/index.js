import KelasImage1 from "../assets/img/kelas/kelas-1.jpg";
import KelasImage2 from "../assets/img/kelas/kelas-2.jpg";
import KelasImage3 from "../assets/img/kelas/kelas-3.jpg";
import KelasImage4 from "../assets/img/kelas/kelas-4.jpg";
import KelasImage5 from "../assets/img/kelas/kelas-5.jpg";
import KelasImage6 from "../assets/img/kelas/kelas-6.jpg";
import KelasImage7 from "../assets/img/kelas/kelas-7.jpg";
import KelasImage8 from "../assets/img/kelas/kelas-8.jpg";
import KelasImage9 from "../assets/img/kelas/kelas-9.jpg";

import People1 from "../assets/img/testimonial/people-1.jpg";
import People2 from "../assets/img/testimonial/people-2.jpg";
import People3 from "../assets/img/testimonial/people-3.jpg";

import Diamond from "../assets/img/kelas/diamond.png";
import Welkin from "../assets/img/kelas/Welkin.png";
import Uc from "../assets/img/kelas/uc.png";

import DanaLogo from "../assets/img/payment/dana.png";
import GopayLogo from "../assets/img/payment/gopay.png";
import BriLogo from "../assets/img/payment/bri.png";
import MandiriLogo from "../assets/img/payment/mandiri.png";
import UsdtLogo from "../assets/img/payment/usdt.png";
import TrxLogo from "../assets/img/payment/trx.png";
import PolygonLogo from "../assets/img/payment/polygon.png";
import DogeLogo from "../assets/img/payment/doge.png";

export const paymentMethods = [
  { imgSrc: DanaLogo, altText: "Dana" },
  { imgSrc: GopayLogo, altText: "GoPay" },
  { imgSrc: BriLogo, altText: "BRI" },
  { imgSrc: MandiriLogo, altText: "Mandiri" },
  { imgSrc: UsdtLogo, altText: "USDT" },
  { imgSrc: TrxLogo, altText: "TRX" },
  { imgSrc: PolygonLogo, altText: "Polygon" },
  { imgSrc: DogeLogo, altText: "Doge" },
];

export const navLinks = [
  {
    id: 1,
    path: "",
    text: "Home",
  },
  {
    id: 2,
    path: "kelas",
    text: "List game",
  },
  {
    id: 3,
    path: "testimonial",
    text: "Testimonial",
  },
  {
    id: 4,
    path: "faq",
    text: "FAQ",
  },
  {
    id: 5,
    path: "syaratketen",
    text: "Syarat & Ketentuan",
  },
];

export const semuaKelas = [
  {
    id: 1,
    image: KelasImage1,
    title: "Ghensin Impact",
    price: [
      { type: "moon x1", price: 62000, image: Welkin },
      { type: "moon x2", price: 122000, image: Welkin },
      { type: "moon x3", price: 182000, image: Welkin },
      { type: "moon x4", price: 240000, image: Welkin },
      { type: "moon x5", price: 300000, image: Welkin },
    ],
    category: ['game_pc', 'game_android', 'game_populer'],
    delay: "1300",
  },
  {
    id: 2,
    image: KelasImage2,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Free Fire",
    price: [
      { type: "70", price: 10000, image: Diamond },
      { type: "100", price: 15000, image: Diamond },
      { type: "140", price: 20000, image: Diamond },
      { type: "210", price: 32000, image: Diamond },
      { type: "280", price: 42000, image: Diamond },
      { type: "355", price: 52000, image: Diamond },
      { type: "420", price: 62000, image: Diamond },
      { type: "500", price: 72000, image: Diamond },
      { type: "720", price: 100000, image: Diamond },
    ],
    category: ["game_populer", "game_android"],
    delay: "1600",
  },
  {
    id: 3,
    image: KelasImage3,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Mobile Legend",
    price: [
      { type: "28 dm", price: 8000, image: Diamond },
      { type: "85 dm", price: 23000, image: Diamond },
      { type: "110 dm", price: 32000, image: Diamond },
      { type: "277 dm", price: 76000, image: Diamond },
      { type: "568 dm", price: 155000, image: Diamond },
      { type: "642 dm", price: 175000, image: Diamond },
      { type: "716 dm", price: 195000, image: Diamond },
      { type: "845 dm", price: 235000, image: Diamond },
      { type: "2232 dm", price: 570000, image: Diamond },
    ],
    category: ["game_android", 'game_populer'],
    delay: "1900",
  },
  {
    id: 4,
    image: KelasImage4,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "PUBG Mobile",
    price: [
      { type: "60 uc", price: 14000, image: Uc },
      { type: "325 uc", price: 66000, image: Uc },
      { type: "660 uc", price: 129000, image: Uc },
      { type: "1800 uc", price: 330000, image: Uc },
    ],
    category: ["game_populer", 'game_android'],
    delay: "",
  },
  {
    id: 5,
    image: KelasImage5,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Roblox",
    price: [
      { type: "2000 Robux", price: 378000 },
      { type: "4500 Robux", price: 800000 },
      { type: "10.000 Robux", price: 1550000 },
    ],
    category: "game_populer",
    delay: "300",
  },
  {
    id: 6,
    image: KelasImage6,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Valorant",
    price: [
      { type: "moon x1", price: 100000 },
      { type: "moon x2", price: 200000 },
      { type: "moon x3", price: 300000 },
    ],
    category: "game_pc",
    delay: "600",
  },
  {
    id: 7,
    image: KelasImage7,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Clash of Clans ",
    price: [
      { type: "moon x1", price: 100000 },
      { type: "moon x2", price: 200000 },
      { type: "moon x3", price: 300000 },
    ],
    category: "game_populer",
    delay: "",
  },
  {
    id: 8,
    image: KelasImage8,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Undawn",
    price: [
      { type: "moon x1", price: 100000 },
      { type: "moon x2", price: 200000 },
      { type: "moon x3", price: 300000 },
    ],
    category: "game_populer",
    delay: "300",
  },
  {
    id: 9,
    image: KelasImage9,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Black Clover",
    price: [
      { type: "moon x1", price: 100000 },
      { type: "moon x2", price: 200000 },
      { type: "moon x3", price: 300000 },
    ],
    category: "game_android",
    delay: "600",
  },
];


export const kelasTerbaru = [
  {
    id: 1,
    image: KelasImage1,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star-half-stroke",
    title: "Ghensin Impact",
    price: "Rp. 300.000",
    buy: "Check",
    delay: "",
  },
  {
    id: 2,
    image: KelasImage2,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Free Fire",
    price: "Rp. 340.000",
    buy: "Check",
    delay: "200",
  },
  {
    id: 3,
    image: KelasImage3,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Mobile Legends",
    price: "Rp. 280.000",
    buy: "Check",
    delay: "400",
  },
  {
    id: 4,
    image: KelasImage4,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "PUBG Mobile",
    price: "Rp. 420.000",
    buy: "Check",
    delay: "",
  },
  {
    id: 5,
    image: KelasImage5,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Roblox",
    price: "Rp. 380.000",
    buy: "Check",
    delay: "200",
  },
  {
    id: 6,
    image: KelasImage6,
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    star4: "fa-solid fa-star",
    star5: "fa-solid fa-star",
    title: "Valorant",
    price: "Rp. 300.000",
    buy: "Check",
    delay: "400",
  },
  
];

export const testimonial = [
  {
    id: 1,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 1",
    skill: "UI UX Designer",
  },
  {
    id: 2,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 2",
    skill: "Flutter Developer",
  },
  {
    id: 3,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 3",
    skill: "Web Developer",
  },
  {
    id: 4,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 4",
    skill: "UI UX Designer",
  },
  {
    id: 5,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 5",
    skill: "Flutter Developer",
  },
  {
    id: 6,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 6",
    skill: "Web Developer",
  },
  {
    id: 7,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 7",
    skill: "UI UX Designer",
  },
  {
    id: 8,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 8",
    skill: "Flutter Developer",
  },
  {
    id: 9,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 9",
    skill: "Web Developer",
  },
];

export const listG = [
  {
  id: 1,
  eventKey: 0,
  title: "Ghensin Impact",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum.",
},

];

export const dataSwiper = [
  {
    id: 1,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 1",
    skill: "UI UX Designer",
  },
  {
    id: 2,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 2",
    skill: "Flutter Developer",
  },
  {
    id: 3,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 3",
    skill: "Web Developer",
  },
  {
    id: 4,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People1,
    name: "People 4",
    skill: "UI UX Designer",
  },
  {
    id: 5,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People2,
    name: "People 5",
    skill: "Flutter Developer",
  },
  {
    id: 6,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, saepe a. Quod eos non, dolores sapiente dicta quam esse reprehenderit explicabo vitae nesciunt ut laborum harum, vel optio corporis voluptatem?",
    image: People3,
    name: "People 6",
    skill: "Web Developer",
  },
  
];

export const faq = [
  {
    id: 1,
    eventKey: 0,
    title: "Bagaimana cara Top Up?",
    desc: "Hubungi no wa admin di pojok kiri bawah",
  },
  {
    id: 2,
    eventKey: 1,
    title: "Bagaimana Sistem Pembayarannya?",
    desc: "Mudah, chat admin lalu lakukan pembayaran melalui transfer Bank, E-Wallet",
  },
  {
    id: 3,
    eventKey: 2,
    title: "Apakah Boleh Hutang dulu?",
    desc: "SKIPPPPPPP",
  },
  {
    id: 4,
    eventKey: 3,
    title: "Apakah Top Up Disini Aman?",
    desc: "Tentu saja, aman dan legal",
  },
];


// Data harga
export const priceList = [
  { id: 1, item: "Moon x1", price: "Rp 25.000" },
  { id: 2, item: "Moon x2", price: "Rp 50.000" },
  { id: 3, item: "Moon x3", price: "Rp 75.000" }
];

export const ff = [
  { id: 1, item: "70", price: "10000" },
  { id: 2, item: "100", price: "15000" },
  { id: 3, item: "dm 140", price: "Rp 22.000" },
  { id: 4, item: "dm 210", price: "Rp 32.000" },
  { id: 5, item: "dm 280", price: "Rp 42.000" },
  { id: 6, item: "dm 355", price: "Rp 52.000" },
  { id: 7, item: "dm 420", price: "Rp 62.000" },
  { id: 8, item: "dm 500", price: "Rp 72.000" },
  { id: 9, item: "dm 720", price: "Rp 100.000" },
 

];

export const ml = [
  { id: 1, item: "dm 85", price: "Rp 23.000" },
  { id: 2, item: "dm 110", price: "Rp 32.000" },
  { id: 3, item: "dm 277", price: "Rp 76.000" },
  { id: 4, item: "dm 568", price: "Rp 155.000" },
  { id: 5, item: "dm 642", price: "Rp 175.000" },
  { id: 6, item: "dm 716", price: "Rp 195.000" },
];

export const tryPage = [
  {
    id: "genshin",
    title: "Ghensin Impact",
    image: "/images/genshin.jpg",
    items: [
      {
        id: "moon-x1",
        type: "moon x1",
        price: 62000,
        image: "/images/moon.png"
      },
      {
        id: "moon-x2",
        type: "moon x2", 
        price: 122000,
        image: "/images/moon.png"
      },
      {
        id: "moon-x3",
        type: "moon x3",
        price: 182000,
        image: "/images/moon.png"
      }
    ]
  },
  {
    id: "freefire",
    title: "Free Fire",
    image: "/images/freefire.jpg",
    items: [
      {
        id: "diamond-70",
        type: "70",
        price: 10000,
        image: "/images/diamond.png"
      },
      {
        id: "diamond-100",
        type: "100",
        price: 15000,
        image: "/images/diamond.png"
      },
      {
        id: "diamond-140",
        type: "140",
        price: 20000,
        image: "/images/diamond.png"
      }
    ]
  },
 
];