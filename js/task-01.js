const numberOfCategotiesRef = categories.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategotiesRef.length}`)
const title = categories.querySelectorAll('h2');
title.forEach((element) => {
    console.log(`Category: ${element.textContent}`);
    console.log( `Elements: ${element.nextElementSibling.children.length}`);
});


