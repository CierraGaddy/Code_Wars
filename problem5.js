/*New Cashier Does Not Know About Space or Shift

// * Problem {6 kyu}

// * Instructions
Some new cashiers started to work at your restaurant.
 They are good at taking orders, but they don't know how to capitalize words, or use a space bar! 
 All the orders they create look something like this: "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza" 
 The kitchen staff are threatening to quit, because of how difficult it is to read the orders. 
 Their preference is to get the orders as a nice clean string with spaces and capitals like so: "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke" 
 The kitchen staff expect the items to be in the same order as they appear in the menu. 
 The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke

Solution */

function getOrder(order) {
  let menu = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke",
  ];

  let parsedItems = [];
  let currentItem = "";

  for (let i = 0; i < order.length; i++) {
    currentItem += order[i];

    for (let j = 0; j < menu.length; j++) {
      if (currentItem.toLowerCase() === menu[j].toLowerCase()) {
        parsedItems.push(menu[j]);
        currentItem = "";
        break;
      }
    }
  }

  let result = "";
  for (let i = 0; i < parsedItems.length; i++) {
    result += parsedItems[i] + " ";
  }

  return result.trim();
}
/*I enjoyed this problem because I was able to identify the methods that 
needed to be used in order to change the cases of the words in the array
and to push the proper value to the parsedItems[]. However it was challenging
to find a way to search the jumbled string because it is like having one large word.
Because the menu items are uppercase in order to search the jumbled string I had to 
convert it to lowercase then compare the words to the string. */
