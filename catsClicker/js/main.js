var catsList = [{
	"name": "Doraemon", 
	"clickAmount": 0
},{
	"name": "Chi", 
	"clickAmount": 0
},{
	"name": "Salem", 
	"clickAmount": 0
},{
	"name": "Tom", 
	"clickAmount": 0
},{
	"name": "Jiji", 
	"clickAmount": 0
}];

// set Doraemon as initial cat
var activeCat = {};

document.addEventListener("click", function(e) {
	if (e.target.classList.contains("cat-name")) {
		activeCat = setActiveCat(e.target.innerHTML);
	}
});

document.getElementById("image").addEventListener("click", function(e) {
	var currentCat = e.target.innerHTML.toLowerCase();
	updateClickAmount(activeCat);
});

var updateClickAmount = function(catObj) {
	catObj.clickAmount++;
	var tempCatName = catObj.name.charAt(0).toUpperCase() + catObj.name.slice(1);
	catsList.map(function(data){
		if (tempCatName === data.name) {
			data = catObj;
		}
	});
	var catClicksDOM = document.getElementById("click-amount");
	catClicksDOM.innerHTML = catObj.clickAmount;

};

var setActiveCat = function(catName){
	// display stuff 
	var catNameDOM = document.getElementById("name");
	var catImageDOM = document.getElementById("image");
	var catClicksDOM = document.getElementById("click-amount");

	var tempCatName = catName.charAt(0).toUpperCase() + catName.slice(1);

	var catObj = {};

	catsList.map(function(data){
		if (tempCatName === data.name) {
			console.log(data);
			catObj = data
		}
	});

	catNameDOM.innerHTML = catObj.name;
	catImageDOM.style.backgroundImage = "url('img/" + catObj.name.toLowerCase() + ".jpg')";
	catClicksDOM.innerHTML = catObj.clickAmount;

	// then return obj
	return catObj; 
};

var activeCat = setActiveCat("Doraemon");