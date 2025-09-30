"use client";
import React, { useEffect, useState } from "react";
import Button from "./common/Button";

const menuItems = [
  "Famlife",
  "ELITE",
  "HYFIELDS",
  "BUFFS",
  "McKinley",
  "Potomac",
  "Rams",
  "Potomacs",
  "EAGLES",
  "PANTHERS",
  "Jags",
];

const cardData: Record<string, any[]> = {
  Famlife: [
    {
      image: "/famlife-flex/long-sleeves-t-shirt.jpg",
      title: "Long-sleeves T shirt",
      note: "*Please enter password 1 to view live demo*",
    },
    {
      image: "/short-sleeves.jpg",
      title: "Short-sleeves T shirt",
      note: "*Please enter password 1 to view live demo*",
    },
  ],
  ELITE: [
    {
      image: "/co-elite/CO-ELITE-FLEECE-HOODIE.jpg",
      title: "CO ELITE FLEECE HOODIE",
      note: "Special deals for new customers",
    },
    // {
    //   image: "/co-elite/CO-ELITE-TRAINING-JACKET.jpg",
    //   title: "CO ELITE TRAINING JACKET",
    //   note: "Up to 70% off!",
    // },
  ],

  HYFIELDS: [
    {
      image: "/hyfields-hawks/ARM-SLEEVES.jpg",
      title: "ARM SLEEVES",
      note: "Comfortable and flexible arm sleeves, perfect for performance and protection.",
    },
    {
      image: "/hyfields-hawks/DUFFLE-BAG.jpg",
      title: "DUFFLE BAG",
      note: "Spacious duffle bag for carrying all your training and match essentials.",
    },
    {
      image: "/hyfields-hawks/FOOTBALL-GLOVES.jpg",
      title: "FOOTBALL GLOVES",
      note: "High-grip football gloves designed for better catching and control.",
    },
    {
      image: "/hyfields-hawks/FOOTBALL-TOWEL.jpg",
      title: "FOOTBALL TOWEL",
      note: "Durable towel to keep your hands dry and improve grip during play.",
    },
    {
      image: "/hyfields-hawks/hat.jpg",
      title: "HAT",
      note: "Classic team hat to show support while keeping the sun away.",
    },
    {
      image: "/hyfields-hawks/HEAD-BAND.jpg",
      title: "HEADBAND",
      note: "Sweat-absorbing headband for maximum comfort during games.",
    },
    {
      image: "/hyfields-hawks/hoodie.jpg",
      title: "HOODIE",
      note: "Stylish hoodie with warmth and comfort for training or casual wear.",
    },
    {
      image: "/hyfields-hawks/shorts.jpg",
      title: "SHORTS",
      note: "Lightweight athletic shorts, designed for comfort and mobility.",
    },
    {
      image: "/hyfields-hawks/SKY-MASK.jpg",
      title: "SKY MASK",
      note: "Protective face mask offering comfort and style in all conditions.",
    },
    {
      image: "/hyfields-hawks/socks.jpg",
      title: "SOCKS",
      note: "Durable and breathable socks for comfort and performance.",
    },
    {
      image: "/hyfields-hawks/T-SHIRT.jpg",
      title: "T-SHIRT",
      note: "Soft and lightweight t-shirt to represent your team with pride.",
    },
    {
      image: "/hyfields-hawks/TRACK-SUITE.jpg",
      title: "TRACKSUITE",
      note: "Premium tracksuite for training, warm-ups, and casual wear.",
    },
  ],

  BUFFS: [
    {
      image: "/buffs/buff-socks.jpg",
      title: "SOCKS",
      note: "Sidebar filter",
    },
  ],
  Potomac: [
    {
      image: "/protomac/protomac-arm-sleeve-min2.jpg",
      title: "ARM SLEEVES",
      note: "Comfortable and stretchable arm sleeves for sports and daily use.",
    },
    {
      image: "/protomac/protomac-backpack-min2.jpg",
      title: "BACKPACK",
      note: "Durable backpack with spacious compartments for everyday essentials.",
    },
    {
      image: "/protomac/protomac-beanie-min2.jpg",
      title: "BEANIES",
      note: "Warm and stylish beanies to keep you cozy in all seasons.",
    },
    {
      image: "/protomac/protomac-duffle-bag-min2.jpg",
      title: "DUFFLE BAG",
      note: "Spacious duffle bag perfect for travel and gym sessions.",
    },
    {
      image: "/protomac/protomac-hat-min2.jpg",
      title: "HAT",
      note: "Classic hat designed for comfort and outdoor wear.",
    },
    {
      image: "/protomac/protomac-headband-min2.jpg",
      title: "HEADBAND",
      note: "Breathable headband to keep sweat away during workouts.",
    },
    {
      image: "/protomac/protomac-hoodie-min2.jpg",
      title: "HOODIE",
      note: "Cozy hoodie with premium fabric for casual and sports wear.",
    },
    {
      image: "/protomac/protomac-polo-shirt-min2.jpg",
      title: "POLO SHIRT",
      note: "Elegant polo shirt for both casual and formal looks.",
    },
    {
      image: "/protomac/protomac-shorts-min2.jpg",
      title: "SHORTS",
      note: "Lightweight and comfortable shorts for active lifestyles.",
    },
    {
      image: "/protomac/protomac-socks-min2.jpg",
      title: "SOCKS",
      note: "Soft and durable socks providing all-day comfort.",
    },
    {
      image: "/protomac/protomac-spats-min2.jpg",
      title: "Spats Cleat Cover",
      note: "Protective cleat covers to enhance grip and durability.",
    },
    {
      image: "/protomac/protomac-t-shirt-min2.jpg",
      title: "T-SHIRT",
      note: "Premium quality t-shirt suitable for sports and casual wear.",
    },
    {
      image: "/protomac/protomac-track-suit-min2.jpg",
      title: "Track-suite / Sweatsuite",
      note: "Full tracksuit designed for comfort, training, and style.",
    },
  ],

  Rams: [
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

  Potomacs: [
    {
      image: "/protomac-wolverines/Arm-sleeves-proto-wolves.jpg",
      title: "Arm Sleeves",
      note: "Comfortable and stretchable arm sleeves designed for performance and protection.",
    },
    {
      image: "/protomac-wolverines/BAG-2-min-1-600x600.jpg",
      title: "Backpack",
      note: "Durable and spacious backpack perfect for sports and daily use.",
    },
    {
      image: "/protomac-wolverines/beanie-2-min.jpg",
      title: "Beanies",
      note: "Warm and stylish beanies to keep you cozy in colder weather.",
    },
    {
      image: "/protomac-wolverines/Duffle-Bag-2.jpg",
      title: "Duffle Bag",
      note: "Spacious duffle bag designed for travel, gym, and sports gear.",
    },
    {
      image: "/protomac-wolverines/Football-Gloves-2.jpg",
      title: "Football Gloves",
      note: "High-grip football gloves to improve catching and ball control.",
    },
    {
      image: "/protomac-wolverines/Half-zipper-Shirt.jpg",
      title: "Half-zipper Shirt",
      note: "Lightweight half-zipper shirt perfect for workouts and casual wear.",
    },
    {
      image: "/protomac-wolverines/Hat-1.jpg",
      title: "Hat",
      note: "Classic and breathable hat for sunny outdoor activities.",
    },
    {
      image: "/protomac-wolverines/Headband-1.jpg",
      title: "Headband",
      note: "Elastic and comfortable headband to keep sweat away while training.",
    },
    {
      image: "/protomac-wolverines/Hoodie-1.jpg",
      title: "Hoodie",
      note: "Premium hoodie combining warmth, comfort, and sporty style.",
    },
    {
      image: "/protomac-wolverines/Loose-fit-Shorts-1.jpg",
      title: "Loose-fit Shorts",
      note: "Breathable and lightweight shorts for maximum comfort during play.",
    },
    {
      image: "/protomac-wolverines/Polo-shirt-1.jpg",
      title: "Polo shirt",
      note: "Stylish polo shirt that blends athletic comfort with casual wear.",
    },
    {
      image: "/protomac-wolverines/Practice-Jersey-1.jpg",
      title: "Practice Jersey",
      note: "Durable and breathable jersey made for everyday practice sessions.",
    },
    {
      image: "/protomac-wolverines/Sleeveless-Hoodie-1.jpg",
      title: "Sleeveless Hoodie",
      note: "Trendy sleeveless hoodie perfect for gym and casual wear.",
    },
    {
      image: "/protomac-wolverines/Sleeveless-Shirt-1.jpg",
      title: "Sleeveless Shirt",
      note: "Lightweight sleeveless shirt ideal for workouts and hot weather.",
    },
    {
      image: "/protomac-wolverines/Socks-1.jpg",
      title: "Socks",
      note: "Comfortable and durable socks offering support for sports activities.",
    },
    {
      image: "/protomac-wolverines/Spats-Cleat-Cover-12.jpg",
      title: "Spats Cleat Cover",
      note: "Protective cleat covers to keep your shoes clean and stylish.",
    },
    {
      image: "/protomac-wolverines/T-Shirt-1.jpg",
      title: "T-Shirt",
      note: "Soft and versatile t-shirt perfect for daily wear and training.",
    },
    {
      image: "/protomac-wolverines/Tie-Headband-1.jpg",
      title: "Tie Headband",
      note: "Adjustable tie headband designed for comfort and sweat control.",
    },
    {
      image: "/protomac-wolverines/Tights-Legging-1.jpg",
      title: "Tights- Legging",
      note: "Flexible leggings designed for training, running, and comfort.",
    },
    {
      image: "/protomac-wolverines/Track-suite-Sweat-suite-1.jpg",
      title: "Track-suite / Sweat suite",
      note: "Complete tracksuit offering warmth, comfort, and athletic style.",
    },
  ],

  EAGLES: [
    {
      image: "/aas-eagles/Arm-Sleeves-green.jpg",
      title: "Arm Sleeves",
      note: "Stretchable and comfortable arm sleeves designed for performance and protection.",
    },
    {
      image: "/aas-eagles/Backpack-green.jpg",
      title: "Backpack",
      note: "Durable and spacious backpack ideal for carrying sports gear and daily essentials.",
    },
    {
      image: "/aas-eagles/Beanies-green.jpg",
      title: "Beanies",
      note: "Warm and stylish beanies to keep you cozy during cold weather.",
    },
    {
      image: "/aas-eagles/Duffle-Bag-green.jpg",
      title: "Duffle Bag",
      note: "Spacious duffle bag designed for gym, travel, and sports equipment.",
    },
    {
      image: "/aas-eagles/Fan-Shirts-green.jpg",
      title: "Fan Shirts",
      note: "Lightweight and breathable fan shirts to show team spirit with comfort.",
    },
    {
      image: "/aas-eagles/Football-Gloves-green.jpg",
      title: "Football Gloves",
      note: "High-grip football gloves that enhance catching and ball control.",
    },
    {
      image: "/aas-eagles/Half-zipper-shirt-green.jpg",
      title: "Half-zipper shirt",
      note: "Lightweight half-zipper shirt suitable for workouts and casual wear.",
    },
    {
      image: "/aas-eagles/Hat-green.jpg",
      title: "Hat",
      note: "Classic hat offering style and sun protection for outdoor use.",
    },
    {
      image: "/aas-eagles/Headband-green.jpg",
      title: "Headband",
      note: "Comfortable headband to absorb sweat and keep focus during activities.",
    },
    {
      image: "/aas-eagles/Hoodie-green.jpg",
      title: "Hoodie",
      note: "Soft and warm hoodie combining comfort with athletic style.",
    },
    {
      image: "/aas-eagles/Loose-fit-Shorts-green.jpg",
      title: "Loose-fit Shorts",
      note: "Breathable and lightweight shorts designed for active performance.",
    },
    {
      image: "/aas-eagles/Mens-Polo-Shirt-green.jpg",
      title: "Mens-Polo Shirt",
      note: "Stylish polo shirt that blends sporty comfort with casual wear.",
    },
    {
      image: "/aas-eagles/Prectice-Jerseys.jpg",
      title: "Prectice Jerseys",
      note: "Durable and breathable jerseys made for daily training sessions.",
    },
    {
      image: "/aas-eagles/Sleeveless-Hoodie-green.jpg",
      title: "Sleeveless Hoodie",
      note: "Trendy sleeveless hoodie perfect for gym and casual outfits.",
    },
    {
      image: "/aas-eagles/Sleeveless-Shirt-green.jpg",
      title: "Sleeveless Shirt",
      note: "Lightweight sleeveless shirt designed for workouts and hot weather.",
    },
    {
      image: "/aas-eagles/Socks-green.jpg",
      title: "Socks",
      note: "Comfortable and durable socks to support daily and sports activities.",
    },
    {
      image: "/aas-eagles/Spats-Cleat-Cover-green.jpg",
      title: "Spats Cleat Cover",
      note: "Protective cleat covers to keep shoes clean and stylish on the field.",
    },
    {
      image: "/aas-eagles/T-Shirts-green.jpg",
      title: "T Shirts",
      note: "Versatile t-shirts suitable for casual wear and active training.",
    },
    {
      image: "/aas-eagles/Tie-Headband-green.jpg",
      title: "Tie Headband",
      note: "Adjustable tie headband for comfort, style, and sweat control.",
    },
    {
      image: "/aas-eagles/Tights-Legging-green.jpg",
      title: "Tights Legging",
      note: "Flexible leggings designed for fitness, running, and comfort.",
    },
    {
      image: "/aas-eagles/Track-Suite-green.jpg",
      title: "Track-Suite",
      note: "Complete tracksuit offering warmth, style, and athletic performance.",
    },
    {
      image: "/aas-eagles/Woman-Shirts-green.jpg",
      title: "Woman Shirts",
      note: "Lightweight and comfortable shirts tailored for women’s activewear.",
    },
  ],

  PANTHERS: [
    {
      image: "/accessories/coming-soon-600x600.jpg",
      title: "FAMLIFE FLEX",
      note: "Exclusive Famlife Flex merchandise for your team spirit.",
    },
    {
      image: "/team-store/01-CO-ELITE.jpg",
      title: "CO ELITE",
      note: "Premium gear for CO Elite athletes and fans.",
    },
    {
      image: "/team-store/02-HYFIELDS-HAWKS.jpg",
      title: "HYFIELDS HAWKS",
      note: "Support the Hyfields Hawks with stylish team apparel.",
    },
    {
      image: "/team-store/03-BUFFS.jpg",
      title: "BUFFS",
      note: "Buffs official store with custom designs and accessories.",
    },
    {
      image: "/team-store/04-Mc-KINLEY-TEC.jpg",
      title: "Mc KINLEY TEC",
      note: "Exclusive collection for Mc Kinley Tec supporters.",
    },
    {
      image: "/team-store/05-Potomac.jpg",
      title: "Potomac",
      note: "Potomac team wear to show your loyalty in style.",
    },
    {
      image: "/team-store/06-AN-Rams.jpg",
      title: "AN-Rams",
      note: "AN Rams collection with bold designs for fans.",
    },
    {
      image: "/team-store/07-Potomacs-Wolverines.jpg",
      title: "Potomacs Wolverines",
      note: "Gear up with Potomacs Wolverines official merchandise.",
    },
    {
      image: "/team-store/08-AAS-EAGLES.jpg",
      title: "AAS EAGLES",
      note: "Shop AAS Eagles apparel and accessories for every fan.",
    },
    {
      image: "/team-store/09-W-PANTHERS.jpg",
      title: "W PANTHERS",
      note: "W Panthers team store featuring exclusive designs.",
    },
    {
      image: "/team-store/10-VA-Jags.jpg",
      title: "VA Jags",
      note: "Official VA Jags gear for athletes and supporters.",
    },
  ],

  Jags: [
    {
      image: "/va-jags/Bags-va.jpeg",
      title: "Bags",
      note: "Durable VA Jags bags designed for everyday use and style.",
    },
    {
      image: "/va-jags/FAN-SHIRT-va.jpg",
      title: "FAN SHIRT",
      note: "Cheer your team with this comfortable VA Jags fan shirt.",
    },
    {
      image: "/va-jags/Hoodie-va.jpg",
      title: "Hoodie",
      note: "Stay warm and stylish with the official VA Jags hoodie.",
    },
    {
      image: "/va-jags/Jacket-va.jpg",
      title: "Jacket",
      note: "Premium VA Jags jacket for a bold and sporty look.",
    },
    {
      image: "/va-jags/Legging-Tights-va.jpg",
      title: "Legging-Tights",
      note: "Flexible and breathable leggings perfect for active routines.",
    },
    {
      image: "/va-jags/Long-Sleeve-T-Shirt-va.jpg",
      title: "Long Sleeve T-Shirt",
      note: "Classic long sleeve T-shirt with VA Jags identity.",
    },
    {
      image: "/va-jags/Long-Sleeves-Dri-Fit-Hoodie.jpg",
      title: "Long Sleeves Dri-Fit Hoodie",
      note: "Moisture-wicking hoodie for performance and comfort.",
    },
    {
      image: "/va-jags/Loose-Fit-Shorts-va.jpg",
      title: "Loose-Fit Shorts",
      note: "Lightweight loose-fit shorts ideal for training or casual wear.",
    },
    {
      image: "/va-jags/Quarter-Zipper-va.jpg",
      title: "Quarter Zipper",
      note: "Trendy quarter zipper with VA Jags branding for all occasions.",
    },
    {
      image: "/va-jags/Short-Sleeves-Dri-Fit-Hoodie-va.jpg",
      title: "Short-Sleeves Dri-Fit Hoodie",
      note: "Cool and comfortable short-sleeves dri-fit hoodie.",
    },
    {
      image: "/va-jags/T-shirt-va.jpg",
      title: "T-Shirt",
      note: "Classic VA Jags T-shirt perfect for fans and casual wear.",
    },
    {
      image: "/va-jags/Trouser-For-Hoodie-va.jpg",
      title: "Trouser For Hoodie",
      note: "Matching trousers designed to complement the VA Jags hoodie.",
    },
    {
      image: "/va-jags/Trouser-For-Jacket-va.jpg",
      title: "Trouser For Jacket",
      note: "Comfortable trousers tailored for the VA Jags jacket.",
    },
    {
      image: "/va-jags/Trouser-For-Quarter-zipper.jpg",
      title: "Trouser For Quarter Zipper",
      note: "Perfect-fit trousers to match the VA Jags quarter zipper.",
    },
  ],

  McKinley: [
    {
      image: "/mc-kenly-tec/arm-sleeves-3.jpg",
      title: "Arm Sleeves",
      note: "Comfortable and flexible arm sleeves, perfect for training and matches.",
    },
    {
      image: "/mc-kenly-tec/BACK-PACK-3.jpg",
      title: "BACKPACK",
      note: "Durable and spacious backpack to carry your essentials.",
    },
    {
      image: "/mc-kenly-tec/Beanie-min3.jpg",
      title: "Beanie",
      note: "Warm and stylish beanie to keep you comfortable in cold weather.",
    },
    {
      image: "/mc-kenly-tec/DUFFLE-BAG-3.jpg",
      title: "DUFFLE BAG",
      note: "Spacious duffle bag for training and travel needs.",
    },
    {
      image: "/mc-kenly-tec/cap-min3.jpg",
      title: "Hat",
      note: "Classic hat to represent your style and team spirit.",
    },
    {
      image: "/mc-kenly-tec/headband-mockup-min3.jpg",
      title: "Headband",
      note: "Sweat-absorbing headband for comfort during workouts.",
    },
    {
      image: "/mc-kenly-tec/long-sleeves-hoodie.jpg",
      title: "Hoodie",
      note: "Cozy and durable hoodie for sports and casual wear.",
    },
    {
      image: "/mc-kenly-tec/Loose-fit-Shorts.jpg",
      title: "Loose-fit Shorts",
      note: "Lightweight shorts for maximum mobility and comfort.",
    },
    {
      image: "/mc-kenly-tec/POLO-min3-scaled-600x600.jpg",
      title: "Polo shirt",
      note: "Stylish polo shirt for casual and semi-formal occasions.",
    },
    {
      image: "/mc-kenly-tec/Spats-min3.jpg",
      title: "Spats Cleat Cover",
      note: "Protective cleat covers for enhanced grip and durability.",
    },
    {
      image: "/mc-kenly-tec/T-SHIRT-min3.jpg",
      title: "T-Shirt",
      note: "Soft and lightweight t-shirt for daily wear and sports.",
    },
    {
      image: "/mc-kenly-tec/Tie-Headband.jpg",
      title: "Tie Headband",
      note: "Adjustable tie headband designed for comfort and performance.",
    },
    {
      image: "/mc-kenly-tec/Track-suit-min3.jpg",
      title: "Track-suite / Sweatsuite",
      note: "Premium tracksuite for training, warm-ups, and casual style.",
    },
  ],
};

const MenuCards = () => {
  const [activeTab, setActiveTab] = useState("Famlife");
  const [animateCards, setAnimateCards] = useState(false);

  const cards = cardData[activeTab] || [];

  useEffect(() => {
    setAnimateCards(false);
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    // <div className="bg-gradient-to-b from-white to-gray-100 py-[90px] overflow-x-hidden">
    //   <div className="flex flex-col items-center gap-8 px-4 sm:px-6 md:px-8 lg:px-0 max-w-full">

    //     <div className="flex flex-wrap  items-center justify-center gap-4 w-full overflow-x-auto scrollbar-hide">
    //       {menuItems.map((label, index) => (
    //         <Button
    //           key={index}
    //           label={label}
    //           variant={label === activeTab ? "gradient" : "outline"}
    //           className={`flex-shrink-0 px-6 sm:px-10 py-2 rounded-full tracking-[0.2px] cursor-pointer font-bold text-[16px] scroll-animate-right`}
    //           style={{ "--animation-order": 0 } as React.CSSProperties}
    //           onClick={() => setActiveTab(label)}
    //         />
    //       ))}
    //     </div>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1200px] mt-8 mb-8">
    //       {cards.map((card, index) => (
    //         <div
    //           key={index}
    //           className={`rounded h-[350px] overflow-hidden shadow-md bg-white scroll-animate-right pt-0 px-7 pb-5 border border-gray-300 hover:border-gray-900`}
    //           style={{ "--animation-order": 1 } as React.CSSProperties}
    //         >
    //           <div className="h-[200px] flex items-center justify-center">
    //             <img
    //               src={card.image}
    //               alt={card.title}
    //               className="max-h-full object-contain"
    //             />
    //           </div>
    //           <div className="text-center p-4">
    //             <h3 className="font-bold text-2xl">{card.title}</h3>
    //             <p className="text-gray-500 text-sm mt-1">{card.note}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
   <div className=" py-[90px] bg-gradient-to-r from-white via-gray-300 to-white">
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
          {cards.map((card, index) => (
            <div
              key={`${activeTab}-${index}`} // unique key per tab
              className="rounded-lg shadow-md bg-white border border-gray-200 hover:cursor-pointer hover:border-black"
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
      </div>
    </div>
  );
};

export default MenuCards;