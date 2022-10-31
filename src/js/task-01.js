console.log(`Number of categories: `, document.querySelectorAll(".item").length);

const categoryTitles = [];
document.querySelectorAll("h2").forEach(function (categoryTitle) {
	categoryTitles.push(categoryTitle.textContent);
});

const subCategoryNumbers = [];
document.querySelectorAll(".item ul").forEach(function (subCategory) {
	subCategoryNumbers.push(subCategory.children.length);
});

for (let i = 0; i < categoryTitles.length; i += 1) {
	console.log("Category: ", categoryTitles[i]);
	console.log("Elements: ", subCategoryNumbers[i]);
}
