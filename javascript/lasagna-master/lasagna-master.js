/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(minutesLeft) {
  if (minutesLeft === 0) {
    return 'Lasagna is done.';
  }

  if (minutesLeft > 0) {
    return 'Not done, please wait.';
  }

  return 'You forgot to set the timer.';
}

export function preparationTime(layers, avgPrepTimeInMinutes = 2) {
  return layers.length * avgPrepTimeInMinutes;
}

export function quantities(layers) {
  const noodlesQty = layers.filter(layer => layer === 'noodles').length;
  const sauceQty = layers.filter(layer => layer === 'sauce').length;

  return {
    noodles: noodlesQty * 50,
    sauce: sauceQty * 0.2
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, numOfPortions) {
  const scaledRecipe = {};

  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = (recipe[ingredient] / 2) * numOfPortions;
  }
  
  return scaledRecipe;
}