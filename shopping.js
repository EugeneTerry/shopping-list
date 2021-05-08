const korgerList = [
  {
    item: 1,
    name: 'Milk',
    price: 2.65
  },
  {
    item: 2,
    name: 'Eggs',
    price: 1.99
  },
  {
    item: 3,
    name: 'Pizza Rolls',
    price: 5.65
  },
  {
    item: 4,
    name: 'Ground Beef',
    price: 4.89
  },
  {
    item: 5,
    name: 'Plums',
    price: 0.65
  },
  {
    item: 6,
    name: 'Hotdog Buns',
    price: 0.99
  },
  {
    item: 7,
    name: 'Mustard',
    price: 1.50
  },
  
]

const newFoods = [
  {
  item: 7,
  name: 'Hotdogs',
  price: 4.50
  },
  {
    item: 7,
    name: 'Rice',
    price: 10.50
  },
  {
    item: 7,
    name: 'Beans',
    price: 7.50
  },
  {
    item: 7,
    name: 'Relish',
    price: 9.50
  },
  {
    item: 7,
    name: 'Onions',
    price: 13.50
  }
]

// const Hotdogs = {
//   item: 7,
//     name: 'Hotdogs',
//     price: 4.50
// };
// const Rice = {
//   item: 7,
//     name: 'Rice',
//     price: 10.50
// };
// const Beans = {
//   item: 7,
//     name: 'Beans',
//     price: 7.50
// };
// const Relish = {
//   item: 7,
//     name: 'Relish',
//     price: 9.50
// };
// const Onions = {
//   item: 7,
//     name: 'Onions',
//     price: 13.50
// };

// const addNewItem = (newItem) => {
  for(newItem of newFoods) {
    newItem.item = korgerList[korgerList.length -1].item + 1;
    const d = new Date();
    newItem.dateCreated = (`${d.getMonth()+1}/${d.getDate()+1}/${d.getFullYear()} ${d.toLocaleTimeString()}`);
    korgerList.push(newItem);
  }
// }

// const addNewItem = (newItem) => {
//   newItem.item = korgerList[korgerList.length -1].item + 1;
//   const d = new Date();
//   newItem.dateCreated = (`${d.getMonth()+1}/${d.getDate()+1}/${d.getFullYear()} ${d.toLocaleTimeString()}`);
//   korgerList.push(newItem);
// }

// addNewItem(Onions);
// addNewItem(Relish);
// addNewItem(Beans);
// addNewItem(Rice);
// addNewItem(Hotdogs);

console.log(korgerList);
// console.log(`Items that are over $8 are:`);
// for(items of korgerList) {
//   if (items.price > 8) {
//     console.log(`${items.name}`)
//   };
// }