"use client";
import React, { useEffect, useState } from "react";
import Button from "./common/Button";

const menuItems = [
  "AMERICAN FOOTBALL",
  "7v7 UNIFORM",
  "BASKETBALL",
  "BASEBALL",
  "FLAG FOOTBALL UNIFORM",
  "RUGBY UNIFORM",
  "SOCCER UNIFORM",
  "CHEERLEADING",
  "ICE HOCKEY",
  "BOXING",
];

const cardData: Record<string, any[]> = {
  "AMERICAN FOOTBALL": [
    {
      image: "/american-football/1.jpg",
      title: "BLACKHAWKS",
      note: "The BLACKHAWKS uniform offers a bold and powerful football look with premium fabric.",
    },
    {
      image: "/american-football/2.jpg",
      title: "BRONCOS",
      note: "The BRONCOS football uniform is designed for comfort and durability on the field.",
    },
    {
      image: "/american-football/3.png",
      title: "Buccaneers Football Uniform",
      note: "Buccaneers uniform reflects tradition and modern style for competitive play.",
    },
    {
      image: "/american-football/4.jpg",
      title: "CHIEFS",
      note: "Chiefs uniform features striking colors and breathable material for athletes.",
    },
    {
      image: "/american-football/5.png",
      title: "Cobras Football Uniform",
      note: "Cobras football uniform provides a fierce design with lightweight strength.",
    },
    {
      image: "/american-football/6.jpg",
      title: "DUCKS",
      note: "Ducks football uniform ensures agility and flexibility during fast gameplay.",
    },
    {
      image: "/american-football/7.png",
      title: "Eagles Football Uniform",
      note: "Eagles uniform emphasizes speed and resilience, built for champions.",
    },
    {
      image: "/american-football/8.jpg",
      title: "FALCONS",
      note: "Falcons uniform combines bold visuals with professional-level comfort.",
    },
    {
      image: "/american-football/9.png",
      title: "Hornets Football Uniform",
      note: "Hornets uniform stands out with sharp colors and durable stitching.",
    },
    {
      image: "/american-football/10.png",
      title: "Hurricanes Football Uniform",
      note: "Hurricanes uniform offers dynamic performance with storm-like energy.",
    },
    {
      image: "/american-football/11.png",
      title: "Jaguars Football Uniform",
      note: "Jaguars uniform balances fierce design and superior quality fabric.",
    },
    {
      image: "/american-football/12.jpg",
      title: "KNIGHTS",
      note: "Knights football uniform represents strength and heritage in style.",
    },
    {
      image: "/american-football/13.png",
      title: "Packers Football Uniform",
      note: "Packers uniform delivers classic design with modern performance upgrades.",
    },
    {
      image: "/american-football/14.jpg",
      title: "PANTHERS",
      note: "Panthers football uniform is built for endurance and maximum comfort.",
    },
    {
      image: "/american-football/15.png",
      title: "Panthers Football Uniform",
      note: "Panthers alternate design brings uniqueness and lightweight strength.",
    },
    {
      image: "/american-football/16.jpg",
      title: "PREDATORS",
      note: "Predators uniform captures intensity with premium-grade materials.",
    },
    {
      image: "/american-football/17.jpg",
      title: "RAMS",
      note: "Rams football uniform is tailored for toughness and precision fit.",
    },
    {
      image: "/american-football/18.png",
      title: "Ravens Football Uniform",
      note: "Ravens uniform gives a sleek look with breathable construction.",
    },
    {
      image: "/american-football/19.png",
      title: "Rhinos Football Uniform",
      note: "Rhinos football uniform represents raw power with a modern touch.",
    },
    {
      image: "/american-football/20.jpg",
      title: "SAINTS",
      note: "Saints uniform blends tradition with a bold, fresh appearance.",
    },
    {
      image: "/american-football/21.png",
      title: "Seahawks Football Uniform",
      note: "Seahawks uniform is styled for performance and iconic recognition.",
    },
    {
      image: "/american-football/22.jpg",
      title: "SEMINOLES",
      note: "Seminoles football uniform reflects pride and classic design.",
    },
    {
      image: "/american-football/23.png",
      title: "Steelers Football Uniform",
      note: "Steelers uniform highlights legacy with superior play-ready design.",
    },
    {
      image: "/american-football/24.jpg",
      title: "TAR HEELS",
      note: "Tar Heels football uniform brings energy and tradition together.",
    },
    {
      image: "/american-football/25.png",
      title: "Texans Football Uniform",
      note: "Texans uniform offers a bold design with breathable mesh fabric.",
    },
    {
      image: "/american-football/26.png",
      title: "Timber-wolef Football Uniform",
      note: "Timber-wolef uniform ensures rugged performance with unique style.",
    },
    {
      image: "/american-football/27.png",
      title: "Titans Football Uniform",
      note: "Titans uniform represents power and precision on the football field.",
    },
    {
      image: "/american-football/28.png",
      title: "Wolves Football Uniform",
      note: "Wolves uniform delivers speed-inspired design and durable comfort.",
    },
  ],

  "7v7 UNIFORM": [
    {
      image: "/7v7/1.png",
      title: "A.M.E 7v7 Uniform",
      note: "A.M.E modern 7v7 uniform that gives players a sporty and stylish look.",
    },
    {
      image: "/7v7/2.png",
      title: "Aug 7v7 Uniform",
      note: "Aug 7v7 uniform is known for its comfortable and durable design.",
    },
    {
      image: "/7v7/3.png",
      title: "Boom 7v7 Uniform",
      note: "Boom 7v7 uniform is popular for its bold design and high performance.",
    },
    {
      image: "/7v7/4.png",
      title: "Crusaders 7v7 Uniform",
      note: "Crusaders classic 7v7 uniform represents true team spirit.",
    },
    {
      image: "/7v7/5.png",
      title: "Dm 7v7 Uniform",
      note: "Dm 7v7 uniform is made with lightweight and breathable fabric for players.",
    },
    {
      image: "/7v7/6.png",
      title: "Egals 35 7v7 Uniform",
      note: "Egals 35 uniform is perfect for competitive matches with its unique design.",
    },
    {
      image: "/7v7/7.png",
      title: "Future stars 7v7 Uniform",
      note: "Future stars uniform is designed to give young players a professional look.",
    },
    {
      image: "/7v7/8.png",
      title: "Gatros 7v7 Uniform",
      note: "Gatros uniform stands out with its bold colors and unique style.",
    },
    {
      image: "/7v7/9.png",
      title: "Hurricanes 7v7 Uniform",
      note: "Hurricanes uniform showcases energy and power on the field.",
    },
    {
      image: "/7v7/10.png",
      title: "I G E 7v7 Uniform",
      note: "I G E 7v7 uniform comes with a professional fit and stylish appeal.",
    },
    {
      image: "/7v7/11.png",
      title: "Miami 7v7 Uniform",
      note: "Miami uniform is made with premium fabric and a vibrant look.",
    },
    {
      image: "/7v7/12.png",
      title: "Seminoles 7v7 Uniform",
      note: "Seminoles uniform blends traditional and modern design elements.",
    },
    {
      image: "/7v7/13.png",
      title: "Tarror Squad 7v7 Uniform",
      note: "Tarror Squad uniform has an aggressive look with strong build quality.",
    },
    {
      image: "/7v7/14.png",
      title: "U-Elite 7v7 Uniform",
      note: "U-Elite uniform is the perfect combination of high-performance fabric and stylish design.",
    },
    {
      image: "/7v7/15.png",
      title: "Wr 7v7 Uniform",
      note: "Wr 7v7 uniform is known for its simple and comfortable design.",
    },
  ],

  BASKETBALL: [
    {
      image: "/basket/1.png",
      title: "Beauties Basketball Uniform",
      note: "Beauties Basketball Uniform offers a stylish and comfortable fit for players.",
    },
    {
      image: "/basket/2.png",
      title: "Bucks Basketball Uniform",
      note: "Bucks Basketball Uniform is designed for high performance with a durable finish.",
    },
    {
      image: "/basket/3.png",
      title: "Buccaneers Football Uniform",
      note: "Buccaneers Football Uniform provides a strong and sporty look for football athletes.",
    },
    {
      image: "/basket/4.png",
      title: "Cavalers Basketball Uniform",
      note: "Cavalers Basketball Uniform delivers a premium design that represents team pride.",
    },
    {
      image: "/basket/5.png",
      title: "Devils Basketball Uniform",
      note: "Devils Basketball Uniform is built with breathable fabric for comfort during play.",
    },
    {
      image: "/basket/6.png",
      title: "Grizzlies Basketball Uniform",
      note: "Grizzlies Basketball Uniform stands out with its bold style and top-rated quality.",
    },
    {
      image: "/basket/7.png",
      title: "Heat Basketball Uniform",
      note: "Heat Basketball Uniform is lightweight and perfect for fast-paced games.",
    },
    {
      image: "/basket/8.png",
      title: "Hollywood Hoops Basketball Uniform",
      note: "Hollywood Hoops Basketball Uniform brings a trendy look with reliable comfort.",
    },
    {
      image: "/basket/9.png",
      title: "Lakers Basketball Uniform",
      note: "Lakers Basketball Uniform offers premium quality and iconic team style.",
    },
    {
      image: "/basket/10.png",
      title: "Miami Basketball Uniform",
      note: "Miami Basketball Uniform combines durability with a sleek, modern design.",
    },
    {
      image: "/basket/11.png",
      title: "Mp Al Basketball Uniform",
      note: "Mp Al Basketball Uniform provides balance between comfort and performance.",
    },
    {
      image: "/basket/12.png",
      title: "Raptors Basketball Uniform",
      note: "Raptors Basketball Uniform is known for its bold design and professional fit.",
    },
    {
      image: "/basket/13.png",
      title: "Spartans Basketball Uniform",
      note: "Spartans Basketball Uniform delivers a strong, athletic look for the team.",
    },
    {
      image: "/basket/14.png",
      title: "Storm Basketball Uniform",
      note: "Storm Basketball Uniform offers energy, style, and reliable comfort for players.",
    },
    {
      image: "/basket/15.png",
      title: "Surge Basketball Uniform",
      note: "Surge Basketball Uniform provides a simple yet effective design for team matches.",
    },
    {
      image: "/basket/15.png",
      title: "Trojans Basketball Uniform",
      note: "Trojans Basketball Uniform blends strength, quality, and a sharp team appearance.",
    },
  ],
  BASEBALL: [
    {
      image: "/baseball/1.png",
      title: "Army Baseball Uniform",
      note: "A strong and durable uniform designed for tough games, inspired by army resilience.",
    },
    {
      image: "/baseball/2.png",
      title: "Breio Creio Baseball Uniform",
      note: "A stylish baseball uniform with unique design for professional and casual matches.",
    },
    {
      image: "/baseball/3.png",
      title: "Brewers Baseball Uniform",
      note: "A classic Brewers-inspired uniform, perfect for teams who value tradition and spirit.",
    },
    {
      image: "/baseball/4.png",
      title: "Dodgers Baseball Uniform",
      note: "A premium Dodgers uniform offering comfort and performance for baseball enthusiasts.",
    },
    {
      image: "/baseball/5.png",
      title: "Jays Baseball Uniform",
      note: "A lightweight Jays uniform, ideal for speed and agility on the field.",
    },
    {
      image: "/baseball/6.png",
      title: "Kings Baseball Uniform",
      note: "A royal-looking Kings uniform crafted with top-quality fabric for champions.",
    },
    {
      image: "/baseball/7.png",
      title: "Rays Baseball Uniform",
      note: "A Rays uniform built for breathability and energy, reflecting modern baseball style.",
    },
    {
      image: "/baseball/8.png",
      title: "Silver Hawks Baseball Uniform",
      note: "A sharp Silver Hawks uniform designed to give a bold and striking team identity.",
    },
    {
      image: "/baseball/9.png",
      title: "Soldiers Baseball Uniform",
      note: "A high-end Soldiers uniform representing strength, power, and endurance on the field.",
    },
  ],

  "FLAG FOOTBALL UNIFORM": [
    {
      image: "/american-football/imagess1.png",
      title: "Aug Flag Uniform",
      note: "A durable Aug Flag uniform designed for speed and agility on the field.",
    },
    {
      image: "/american-football/imagess2.png",
      title: "Broncos Flag Uniform",
      note: "A bold Broncos uniform offering comfort and professional team identity.",
    },
    {
      image: "/american-football/imagess3.png",
      title: "Broncos Flag Uniforms",
      note: "An alternate Broncos uniform style crafted for both style and toughness.",
    },
    {
      image: "/american-football/imagess4.png",
      title: "Buccnerrs Flag Uniform",
      note: "A Buccnerrs uniform with premium design reflecting power and resilience.",
    },
    {
      image: "/american-football/imagess5.png",
      title: "Chaos Flag Uniform",
      note: "A Chaos uniform featuring lightweight fabric for fast-paced matches.",
    },
    {
      image: "/american-football/imagess6.png",
      title: "Crusaders Flag Compression",
      note: "A Crusaders compression uniform built for strength and endurance.",
    },
    {
      image: "/american-football/imagess7.png",
      title: "Egals Flag Uniform",
      note: "An Egals uniform with a sleek fit ensuring agility and performance.",
    },
    {
      image: "/american-football/imagess8.png",
      title: "Fusion Flag Uniform",
      note: "A Fusion uniform designed for top-tier athletes with modern aesthetics.",
    },
    {
      image: "/american-football/imagess9.png",
      title: "Gators Flag compression",
      note: "A Gators compression uniform made for comfort during long matches.",
    },
    {
      image: "/american-football/imagess10.png",
      title: "Miami Flag Compression",
      note: "A Miami compression uniform delivering maximum performance and flexibility.",
    },
    {
      image: "/american-football/imagess11.png",
      title: "Panthers Flag Uniform",
      note: "A Panthers uniform designed for durability and competitive edge.",
    },
    {
      image: "/american-football/imagess12.png",
      title: "Steelers Flag Uniform",
      note: "A Steelers uniform built for champions with superior quality fabric.",
    },
    {
      image: "/american-football/imagess13.png",
      title: "Team Pride Flag Uniform",
      note: "A Team Pride uniform reflecting unity, teamwork, and spirit.",
    },
    {
      image: "/american-football/imagess14.png",
      title: "Titans Flag Uniform",
      note: "A Titans uniform combining strength and agility for high-impact games.",
    },
    {
      image: "/american-football/imagess15.png",
      title: "Wolfpack Flag Uniform",
      note: "A Wolfpack uniform with bold design to showcase team dominance.",
    },
    {
      image: "/american-football/imagess16.png",
      title: "PREDATORS",
      note: "A Predators uniform representing fierce energy and competitive spirit.",
    },
    {
      image: "/american-football/imagess9.png",
      title: "Texans Football Uniform",
      note: "A Texans football uniform crafted for professional players with premium comfort.",
    },
  ],

  "RUGBY UNIFORM": [
    {
      image: "/an-rams/arm-sleeve-3-min.jpg",
      title: "ARM SLEEVES",
      note: "Comfortable arm sleeves designed for performance and protection.",
    },
    {
      image: "/an-rams/backpack-4-min.jpg",
      title: "BACKPACK",
      note: "Durable and spacious backpack, ideal for school, gym, or travel.",
    },
    {
      image: "/an-rams/basketball-shorts-3-min.jpg",
      title: "Basketball Shorts",
      note: "Breathable basketball shorts for maximum mobility and comfort.",
    },
    {
      image: "/an-rams/beanie-4-min.jpg",
      title: "Beanies",
      note: "Soft knitted beanies to keep you warm and stylish.",
    },
    {
      image: "/an-rams/cheerleader-uniforms-3-min.jpg",
      title: "CHEERLEADER UNIFORMS",
      note: "Stylish cheer uniforms designed for team spirit and performance.",
    },
    {
      image: "/an-rams/coaches-polo-shirt-3-min.jpg",
      title: "Coaches Polo Shirt",
      note: "Professional polo shirt tailored for coaches and casual wear.",
    },
    {
      image: "/an-rams/duffle-bag-3-min.jpg",
      title: "Duffle Bag",
      note: "Spacious duffle bag perfect for sports, gym, and travel.",
    },
    {
      image: "/an-rams/football-gloves-3-min.jpg",
      title: "Football Gloves",
      note: "High-grip football gloves for enhanced control and performance.",
    },
    {
      image: "/an-rams/half-zipper-3-min-300x300.jpg",
      title: "Half-Zipper Shirt",
      note: "Lightweight half-zipper shirt for training and casual wear.",
    },
    {
      image: "/an-rams/cap-4-min-600x600.jpg",
      title: "Hat",
      note: "Classic cap for everyday wear and sun protection.",
    },
    {
      image: "/an-rams/headband-mockup-3-min-600x600.jpg",
      title: "Headband",
      note: "Sweat-absorbing headband for workouts and sports activities.",
    },
    {
      image: "/an-rams/LONG-SLEEVES-HOODIE-3-min-scaled-600x600.jpg",
      title: "Hoodie",
      note: "Warm hoodie crafted for comfort, style, and durability.",
    },
    {
      image: "/an-rams/PRACTICE-JERSEY-3-min-600x600.jpg",
      title: "Practice Jersey",
      note: "Lightweight jersey for practice sessions and training.",
    },
    {
      image: "/an-rams/sleeveless-hoodie-3-min-scaled-600x600.jpg",
      title: "Sleeveless-hoodie",
      note: "Trendy sleeveless hoodie for workouts and casual wear.",
    },
    {
      image: "/an-rams/Sleeveless-T-shirt-3-min-scaled-600x600.jpg",
      title: "Sleeveless-T Shirt",
      note: "Comfortable sleeveless T-shirt perfect for summer workouts.",
    },
    {
      image: "/an-rams/SOCKS-15-3-min-600x600.jpg",
      title: "Socks",
      note: "Soft, breathable socks providing all-day comfort.",
    },
    {
      image: "/an-rams/spats-3-min-600x600.jpg",
      title: "Spats / Cleat Cover",
      note: "Durable cleat covers for added protection and grip.",
    },
    {
      image: "/an-rams/T-SHIRT-3-min-scaled-600x600.jpg",
      title: "T-Shirt",
      note: "Classic T-shirt designed for daily wear and sports.",
    },
    {
      image: "/an-rams/head-band-3-min-300x300.jpg",
      title: "Tie Headband",
      note: "Adjustable tie headband for secure and comfortable fit.",
    },
    {
      image: "/an-rams/TIGHTS-3-min-scaled-600x600.jpg",
      title: "Tights / Legging",
      note: "Stretchable leggings built for flexibility and performance.",
    },
    {
      image: "/an-rams/track-suit-3-min-scaled-600x600.jpg",
      title: "Tracksuite",
      note: "Premium tracksuit perfect for sports, travel, and daily wear.",
    },
    {
      image: "/an-rams/WOMAN-TRACK-SUITE-1-min-600x600.jpg",
      title: "Woman Tracksuite",
      note: "Stylish women’s tracksuit designed for comfort and training.",
    },
    {
      image: "/an-rams/CROP-TOP-1-min-600x600.jpg",
      title: "Woman Crop Top",
      note: "Trendy women’s crop top for casual and sporty looks.",
    },
    {
      image: "/an-rams/woman-polo-shirtr-2-min-600x600.jpg",
      title: "Woman Polo Shirts",
      note: "Elegant women’s polo shirt for casual and semi-formal wear.",
    },
    {
      image: "/an-rams/BIKER-SHORTS-1-min-600x600.jpg",
      title: "Woman short-tights",
      note: "Comfortable biker shorts designed for workouts and casual wear.",
    },
    {
      image: "/an-rams/woman-booty-shorts-1-min-600x600.jpg",
      title: "Woman Shorts",
      note: "Breathable women’s shorts suitable for gym and daily wear.",
    },
    {
      image: "/an-rams/MOCK-UP_T-Shirt_Woman_12-1-min-429x600.jpg",
      title: "Woman T Shirt",
      note: "Classic women’s T-shirt made with soft, premium fabric.",
    },
  ],

  "SOCCER UNIFORM": [
    {
      image: "/american-football/SOCCER-1.png",
      title: "Barclays Soccer Uniforms",
      note: "Barclays Soccer Uniforms designed with comfort and durability for competitive play.",
    },
    {
      image: "/american-football/SOCCER-2.png",
      title: "Cowpens Soccer Uniforms",
      note: "Cowpens Soccer Uniforms bring a professional look with top-quality performance fabric.",
    },
    {
      image: "/american-football/SOCCER-3.png",
      title: "Hook Soccer FC",
      note: "Hook Soccer FC uniform crafted for agility and breathability on the field.",
    },
    {
      image: "/american-football/SOCCER-4.png",
      title: "Park City Soccer Club",
      note: "Park City Soccer Club uniform offers style and strength for active matches.",
    },
    {
      image: "/american-football/SOCCER-5.png",
      title: "Soccer United",
      note: "Soccer United uniform ensures comfort and team unity during intense games.",
    },
    {
      image: "/american-football/SOCCER-6.png",
      title: "Soccer Legends",
      note: "Soccer Legends uniform blends tradition and modern design for star players.",
    },
    {
      image: "/american-football/SOCCER-7.png",
      title: "Soccer Stars",
      note: "Soccer Stars uniform made with lightweight material for speed and flexibility.",
    },
    {
      image: "/american-football/SOCCER-8.png",
      title: "Soccer Champions",
      note: "Soccer Champions uniform represents victory with premium design and comfort.",
    },
  ],

  CHEERLEADING: [
    {
      image: "/american-football/1.jpg",
      title: "BLACKHAWKS",
      note: "BLACKHAWKS football uniform crafted for bold style and strong on-field presence.",
    },
    {
      image: "/american-football/2.jpg",
      title: "BRONCOS",
      note: "BRONCOS football uniform built for comfort, speed, and durable performance.",
    },
    {
      image: "/american-football/3.png",
      title: "Buccaneers Football Uniform",
      note: "Buccaneers Football Uniform designed to bring power and tradition to the game.",
    },
    {
      image: "/american-football/4.jpg",
      title: "CHIEFS",
      note: "CHIEFS football uniform showcasing energy, agility, and team spirit.",
    },
    {
      image: "/american-football/5.png",
      title: "Cobras Football Uniform",
      note: "Cobras Football Uniform delivering sleek design and aggressive style.",
    },
    {
      image: "/american-football/6.jpg",
      title: "DUCKS",
      note: "DUCKS football uniform made lightweight for high performance and mobility.",
    },
    {
      image: "/american-football/7.png",
      title: "Eagles Football Uniform",
      note: "Eagles Football Uniform combining comfort and toughness for competitive play.",
    },
    {
      image: "/american-football/8.jpg",
      title: "FALCONS",
      note: "FALCONS football uniform engineered for maximum impact and endurance.",
    },
    {
      image: "/american-football/9.png",
      title: "Hornets Football Uniform",
      note: "Hornets Football Uniform offering balance of durability and comfort.",
    },
    {
      image: "/american-football/10.png",
      title: "Hurricanes Football Uniform",
      note: "Hurricanes Football Uniform crafted for unstoppable energy and resilience.",
    },
    {
      image: "/american-football/11.png",
      title: "Jaguars Football Uniform",
      note: "Jaguars Football Uniform built for agility and strength on the field.",
    },
    {
      image: "/american-football/12.jpg",
      title: "KNIGHTS",
      note: "KNIGHTS football uniform blending tradition and modern performance fabric.",
    },
    {
      image: "/american-football/13.png",
      title: "Packers Football Uniform",
      note: "Packers Football Uniform designed with precision for reliable comfort.",
    },
    {
      image: "/american-football/14.jpg",
      title: "PANTHERS",
      note: "PANTHERS football uniform crafted for fearless style and performance.",
    },
    {
      image: "/american-football/15.png",
      title: "Panthers Football Uniform",
      note: "Panthers Football Uniform providing flexibility and professional design.",
    },
    {
      image: "/american-football/16.jpg",
      title: "PREDATORS",
      note: "PREDATORS football uniform made for toughness and bold team identity.",
    },
    {
      image: "/american-football/17.jpg",
      title: "RAMS",
      note: "RAMS football uniform offering strength and lasting endurance.",
    },
    {
      image: "/american-football/18.png",
      title: "Ravens Football Uniform",
      note: "Ravens Football Uniform designed for balance of comfort and durability.",
    },
    {
      image: "/american-football/19.png",
      title: "Rhinos Football Uniform",
      note: "Rhinos Football Uniform bringing power and agility to the players.",
    },
    {
      image: "/american-football/20.jpg",
      title: "SAINTS",
      note: "SAINTS football uniform delivering iconic style with reliable comfort.",
    },
    {
      image: "/american-football/21.png",
      title: "Seahawks Football Uniform",
      note: "Seahawks Football Uniform built with premium quality for champions.",
    },
    {
      image: "/american-football/22.jpg",
      title: "SEMINOLES",
      note: "SEMINOLES football uniform offering tradition with modern flexibility.",
    },
    {
      image: "/american-football/23.png",
      title: "Steelers Football Uniform",
      note: "Steelers Football Uniform built for resilience and legendary pride.",
    },
    {
      image: "/american-football/24.jpg",
      title: "TAR HEELS",
      note: "TAR HEELS football uniform designed for sleek performance and identity.",
    },
    {
      image: "/american-football/25.png",
      title: "Texans Football Uniform",
      note: "Texans Football Uniform showcasing strength and professional finish.",
    },
    {
      image: "/american-football/26.png",
      title: "Timber-wolef Football Uniform",
      note: "Timber-wolef Football Uniform providing durable fabric and flexibility.",
    },
    {
      image: "/american-football/27.png",
      title: "Titans Football Uniform",
      note: "Titans Football Uniform engineered for ultimate strength and victory.",
    },
    {
      image: "/american-football/28.png",
      title: "Wolves Football Uniform",
      note: "Wolves Football Uniform blending modern design with solid durability.",
    },
  ],
};

const MenuCards = () => {
  const [activeTab, setActiveTab] = useState("AMERICAN FOOTBALL");
  const [animateCards, setAnimateCards] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const cards = cardData[activeTab] || [];

  useEffect(() => {
    setAnimateCards(false);
    setVisibleCount(4);
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  // 👇 Scroll Animation Logic
  const checkInView = () => {
    const animateElements = document.querySelectorAll(
      ".scroll-animate-up, .scroll-animate-down, .scroll-animate-left, .scroll-animate-right"
    );

    animateElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isInView =
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= 0;

      if (isInView) {
        el.classList.add("in-view");
      }
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    checkInView();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkInView();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Important fix: re-check after visibleCount changes (View More)
  useEffect(() => {
    if (typeof window === "undefined") return;
    setTimeout(() => checkInView(), 100); // short delay for DOM update
  }, [visibleCount]);

  return (
    <div className="py-[90px] bg-gradient-to-r from-white via-gray-300 to-white">
      <div className="flex flex-col items-center gap-8 max-w-7xl mx-auto">
        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {menuItems.map((label, index) => (
            <Button
              key={index}
              label={label}
              variant={label === activeTab ? "gradient" : "outline"}
              className="px-10 py-2 rounded-full tracking-[0.2px] cursor-pointer font-bold text-[16px]"
              onClick={() => setActiveTab(label)}
            />
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full px-2">
          {cards.slice(0, visibleCount).map((card, index) => (
            <div
              key={`${activeTab}-${index}`}
              className={`scroll-animate-up rounded-lg shadow-md bg-white border border-gray-200 hover:cursor-pointer hover:border-black transition-all duration-700 ease-in-out transform opacity-0 translate-y-10`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[300px] object-contain p-5"
              />
              <div className="text-center p-4">
                <h3 className="font-bold text-xl">{card.title}</h3>
                <p className="text-gray-500 mt-1">{card.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {visibleCount < cards.length && (
          <button
            onClick={handleSeeMore}
            className="mt-6 px-6 py-2 cursor-pointer bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition"
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuCards;
