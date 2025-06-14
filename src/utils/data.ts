// import { ResListData } from "../type/Type";
// const resListData: ResListData = {
//     restaurants: [
//       {
//         info: {
//           id: "101",
//           name: "KFC",
//           cloudinaryImageId: "b5debf206e5e05b1482ca8f03fdc7ca1",
//           locality: "Kurla East",
//           areaName: "Kurla West",
//           costForTwo: "₹400 for two",
//           cuisines: ["Burgers", "Fast Food", "Wraps"],
//           avgRating: 4.2,
//           sla: {
//             deliveryTime: 45,
//             slaString: "45-50 mins",
//           },
//         },
//         cta: {
//           link: "https://kfc.com",
//           type: "WEBLINK",
//         },
//       },
//       {
//         info: {
//           id: "102",
//           name: "McDonald's",
//           cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
//           locality: "Bandra",
//           areaName: "Bandra West",
//           costForTwo: "₹350 for two",
//           cuisines: ["Burgers", "Fries", "Desserts"],
//           avgRating: 4.0,
//           sla: {
//             deliveryTime: 30,
//             slaString: "25-30 mins",
//           },
//         },
//         cta: {
//           link: "https://mcdonalds.com",
//           type: "WEBLINK",
//         },
//       },
//       {
//         info: {
//           id: "103",
//           name: "Domino's Pizza",
//           cloudinaryImageId: "e3c76358c2e8d6bcb5d9f2a74c1efeb3",
//           locality: "Andheri",
//           areaName: "Andheri East",
//           costForTwo: "₹500 for two",
//           cuisines: ["Pizza", "Italian", "Beverages"],
//           avgRating: 4.1,
//           sla: {
//             deliveryTime: 40,
//             slaString: "35-40 mins",
//           },
//         },
//         cta: {
//           link: "https://dominos.com",
//           type: "WEBLINK",
//         },
//       },
//       {
//         info: {
//           id: "104",
//           name: "Pizza Hut",
//           cloudinaryImageId: "f8378f772e3fdf0f0b2c3a58630e2ab3",
//           locality: "Powai",
//           areaName: "Hiranandani",
//           costForTwo: "₹450 for two",
//           cuisines: ["Pizza", "Fast Food"],
//           avgRating: 4.3,
//           sla: {
//             deliveryTime: 35,
//             slaString: "30-35 mins",
//           },
//         },
//         cta: {
//           link: "https://pizzahut.com",
//           type: "WEBLINK",
//         },
//       },
//       {
//         info: {
//           id: "105",
//           name: "Subway",
//           cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//           locality: "Juhu",
//           areaName: "Juhu Beach",
//           costForTwo: "₹300 for two",
//           cuisines: ["Sandwiches", "Healthy Food"],
//           avgRating: 4.0,
//           sla: {
//             deliveryTime: 25,
//             slaString: "20-25 mins",
//           },
//         },
//         cta: {
//           link: "https://subway.com",
//           type: "WEBLINK",
//         },
//       },
//       {
//         info: {
//           id: "106",
//           name: "Starbucks",
//           cloudinaryImageId: "182646218f100637bdcd60fecfff8f08",
//           locality: "Vile Parle",
//           areaName: "Vile Parle East",
//           costForTwo: "₹600 for two",
//           cuisines: ["Coffee", "Beverages", "Snacks"],
//           avgRating: 4.5,
//           sla: {
//             deliveryTime: 20,
//             slaString: "15-20 mins",
//           },
//         },
//         cta: {
//           link: "https://starbucks.com",
//           type: "WEBLINK",
//         },
//       },
//       {
//         info: {
//           id: "107",
//           name: "Haldiram's",
//           cloudinaryImageId: "67ca7966c2c84f7e2c8ba8273546854f",
//           locality: "Ghatkopar",
//           areaName: "R City Mall",
//           costForTwo: "₹250 for two",
//           cuisines: ["North Indian", "Snacks", "Sweets"],
//           avgRating: 4.2,
//           sla: {
//             deliveryTime: 30,
//             slaString: "25-30 mins",
//           },
//         },
//         cta: {
//           link: "https://haldirams.com",
//           type: "WEBLINK",
//         },
//       },
//       {
//         info: {
//           id: "108",
//           name: "Biryani Blues",
//           cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
//           locality: "Thane",
//           areaName: "Viviana Mall",
//           costForTwo: "₹500 for two",
//           cuisines: ["Biryani", "Mughlai", "Hyderabadi"],
//           avgRating: 4.4,
//           sla: {
//             deliveryTime: 45,
//             slaString: "40-45 mins",
//           },
//         },
//         cta: {
//           link: "https://biryaniblues.com",
//           type: "WEBLINK",
//         },
//       },
//       {
//         info: {
//           id: "109",
//           name: "Wow! Momo",
//           cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//           locality: "Chembur",
//           areaName: "Chembur East",
//           costForTwo: "₹300 for two",
//           cuisines: ["Momos", "Chinese", "Snacks"],
//           avgRating: 4.1,
//           sla: {
//             deliveryTime: 25,
//             slaString: "20-25 mins",
//           },
//         },
//         cta: {
//           link: "https://wowmomo.com",
//           type: "WEBLINK",
//         },
//       },
//       {
//         info: {
//           id: "110",
//           name: "Burger King",
//           cloudinaryImageId: "28fb13049b4e55297bb3f703cde63c35",
//           locality: "Malad",
//           areaName: "Malad West",
//           costForTwo: "₹400 for two",
//           cuisines: ["Burgers", "American"],
//           avgRating: 4.0,
//           sla: {
//             deliveryTime: 35,
//             slaString: "30-35 mins",
//           },
//         },
//         cta: {
//           link: "https://burgerking.in",
//           type: "WEBLINK",
//         },
//       },
//       {
//         info: {
//           id: "111",
//           name: "Cafe Coffee Day",
//           cloudinaryImageId: "2c9f8a50373a5bc4e5ba79e6ff5b1d79",
//           locality: "Borivali",
//           areaName: "Borivali East",
//           costForTwo: "₹350 for two",
//           cuisines: ["Coffee", "Beverages"],
//           avgRating: 4.1,
//           sla: {
//             deliveryTime: 20,
//             slaString: "15-20 mins",
//           },
//         },
//         cta: {
//           link: "https://cafecoffeeday.com",
//           type: "WEBLINK",
//         },
//       },
//       {
//         info: {
//           id: "112",
//           name: "Barbeque Nation",
//           cloudinaryImageId: "21d6d2b89bd2e5e8261a5361f2b6a8a2",
//           locality: "Lower Parel",
//           areaName: "Phoenix Mills",
//           costForTwo: "₹1200 for two",
//           cuisines: ["Barbecue", "North Indian", "Buffet"],
//           avgRating: 4.5,
//           sla: {
//             deliveryTime: 60,
//             slaString: "55-60 mins",
//           },
//         },
//         cta: {
//           link: "https://barbequenation.com",
//           type: "WEBLINK",
//         },
//       },
//     ],
//   };

// export default resListData;