$(function() {
  // Here is an array
  const fruit = ["Apples","Pears","Cherries","Grapes","Orange","Banana","Blueberries","Lemon","Mango","Papaya","Pineapple","Watermelon","Cantalope","Honeydew"];

  // Write a function that will:

    // Take the fruit array as an argument
    function sort (fruit) {
      let newFruitArray = [...fruit]
      // Sort the fruit alphabetically (don't forget to make a copy of the array so you don't modify the original. Look up the array spread operator)
      // Map over each fruit and append a list item with the name of a fruit inside of it
      
      newFruitArray.sort()

      let htmlElements = []
      newFruitArray.forEach((fruit) =>{
        htmlElements.push("<li class='fruitItem'>" + fruit + "</li>")
      })

      console.log(htmlElements);
      
      return htmlElements
    }

    // Finally use jQuery to dump your html into the unordered list above
    $(document).ready(function(){
      let fruitItems = sort(fruit)
      fruitItems.forEach(item => {
        $(".fruits").append(item)
      })
    })

  // BONUS: When you click a fruit, it should be removed from the list

});