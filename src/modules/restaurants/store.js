export default {
  namespaced: true,
  state: {
    restaurants: [
      {
        id: "DELG198141082",
        name: "The Leeks Restaurant",
        description: "Quality delicious meals for everyone",
        location: "Ruaka Joyland",
        menu: {
          categories: {
            desserts: [
              {
                name: "Cake N Shake Deal",
                description: "A Cake Slice & Cake n Shake Milkshake",
                price: "600"
              },
              {
                name: "Cookie Doughn't You Want Some",
                description:
                  "French Vanilla Ice Cream with Chocolate Chips, Cookie Dough, Fudge and Caramel",
                price: "400"
              },
              {
                name: "Mud Pie Mojo",
                description:
                  "Coffee Ice Cream with oreo Cookies, Peanut Butter, Roasted Almonds and Fudge",
                price: "450"
              }
            ],
            softDrinks: [
              {
                name: "Regular tea",
                description: "Tea & Chocolate",
                price: "100"
              },
              {
                name: "House Coffee",
                description:
                  "All coffee drinks are available in DECAF, soy or skim milk upon request",
                price: "100"
              },
              {
                name: "Espresso",
                description:
                  "All coffee drinks are available in DECAF, soy or skim milk upon reques",
                price: "100"
              },
              {
                name: "Sodas (300ml)",
                description: "Canned",
                price: "100"
              },
              {
                name: "Urban Vanilla Shake",
                description: "Milk Shake",
                price: "400"
              },
              {
                name: "Still Water",
                description: "Bottled",
                price: "100"
              }
            ],
            hardDrinks: [
              {
                name: "Gordons 700ml Premium Pink",
                description:
                  "Inspired by an original Gordon’s recipe from the 1880s",
                price: "1600"
              },
              {
                name: "Kenya Cane",
                description:
                  "(750 ML) + Captain Morgan Gold (750 ml) + 2 Free Glass",
                price: "1500"
              },
              {
                name: "Jameson Black Barrel (750ml) with Glasses",
                description:
                  "It is a blend of small batch grain and traditional Irish pot still whiskeys",
                price: "4000"
              },
              {
                name: "Tusker Cider ",
                description: "6-pack (500 ml) can",
                price: "1200"
              },
              {
                name: "Guinness",
                description: "Bottle - 500ml - 6 Pack (Glass Bottle)",
                price: ""
              }
            ],
            mains: [
              {
                name: "Fried Beef",
                description:
                  "Tender beef boiled with potatoes, carrots, onion and capsicum Finished with spinach and coriander",
                price: "1,500Ksh"
              },
              {
                name: "Kienyeji Chicken",
                description:
                  "Kienyeji chicken fried or boiled with tomatoes, onions and coriander.",
                price: "850"
              },
              {
                name: "Fried Choma Sausages",
                description:
                  "Served with pilipili or sweet & sour sauce with some french fries",
                price: "600"
              },
              {
                name: "Vegetable Curry",
                description: "Mixed vegetable cubes Fried in Indian Delicacy",
                price: "500"
              },
              {
                name: "Whole Fish",
                description: "Wet fried tilapia with onion and tomato sauce.",
                price: "1,000"
              },
              {
                name: "Fried Goat",
                description:
                  "Tender goat meat boiled in a stack of vegetables and finished with coriander",
                price: "1500"
              }
            ]
          }
        }
      }
    ]
  },
  mutations: {},
  getters: {
    restaurants: state => state.restaurants
  },
  actions: {}
};
