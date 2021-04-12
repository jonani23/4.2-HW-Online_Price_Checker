let itemName = prompt("Enter the name of the item?");
let basePrice = prompt("What is the base price of the item?");
let finalPrice = basePrice;
let message = ``;

let blackFriday= prompt("Is today Black Friday? yes or no?")
  if(blackFriday === 'yes') {
  finalPrice *= 0.75
  message += `Since it's Black Friday, we will reduce the price by 25%.`
} else if(blackFriday === 'no') {
  message += `It's not Black Friday, so the price didn't change for that.`
}

let buyFromSearchEngine = prompt("Did you purchase product through search engine? yes or no?")
    if(buyFromSearchEngine === 'yes') {
    finalPrice *= 1.01
    message += `We will increase the price by 1% to pay the search engine.`
  } else if(buyFromSearchEngine === 'no') {
    message += `The customer didn't use a search engine, so the price didn't change for that.`
  }

let comparedShoppingSite = prompt("Did you visit a comparision-shopping site? yes or no?")
        if(comparedShoppingSite === 'yes') {
        finalPrice *= 0.9
        message += `Since the customer visited a comparison-shopping site, we will reduce the price by 10%.`
     }  else if(comparedShoppingSite === 'no') {
        message += `The customer didn't visit a comparison-shopping site, so the price didn't change for that.`
     }


// Calculatons:
finalPrice = finalPrice.toFixed(2)
console.log(`The base price for ${itemName} is ${basePrice}. ${message}The final price of purchased product is $${finalPrice}.`)

// console output(all conditions save search engine "yes")
// The base price for MacBook Pro is 879.95. Since it's Black Friday, we will reduce the price by 25%.The customer didn't use a search engine, so the price didn't change for that.Since the customer visited a comparison-shopping site, we will reduce the price by 10%.The final price of purchased product is $593.97.

// console output(all conditions "no")
// The base price for MacBook Pro is 879.95. It's not Black Friday, so the price didn't change for that.We will increase the price by 1% to pay the search engine.The customer didn't visit a comparison-shopping site, so the price didn't change for that.The final price of purchased product is $888.75.




















