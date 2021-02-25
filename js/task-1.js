const categoriesRef = document.querySelector("#categories");
const itemsRef = categoriesRef.querySelectorAll(".item");
console.log(`В списке ${itemsRef.length} категории`);

itemsRef.forEach(elem => {
    const headingRef = elem.querySelector("h2");
    const listArr = elem.querySelectorAll("li");
console.log("Категория: ", headingRef.textContent);
console.log("Количество элементов: ", listArr.length);   
});
