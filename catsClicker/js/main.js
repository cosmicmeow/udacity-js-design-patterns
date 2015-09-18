window.onload = function(){

	var model = {
		init: function() {
			this.catsList = [
				{
					"name": "Doraemon", 
					"clickAmount": 0
				},
				{
					"name": "Chi", 
					"clickAmount": 0
				},
				{
					"name": "Salem", 
					"clickAmount": 0
				},
				{
					"name": "Tom", 
					"clickAmount": 0
				},
				{
					"name": "Jiji", 
					"clickAmount": 0
				}
			];
			octopus.setActiveCat(this.catsList[0].name);
		}
	};

	var octopus = {
		init: function() {
			model.init();
			view.init();
		},
		updateClickAmount: function() {
			model.activeCat.clickAmount++;
				model.catsList.map(function(data){
					if (model.activeCat.name === data.name) {
						data = model.activeCat;
					}
				});
			view.renderActiveCat(model.activeCat.name);
		},
		setActiveCat: function(catName) {
			this.getCatsList().map(function(cat) {
				if (catName === cat.name) {
					model.activeCat =  cat;
				}
			});
			view.renderActiveCat(model.activeCat.name);
		},
		getCatsList: function() {
			return model.catsList;
		},
		getActiveCat: function() {
			return model.activeCat;
		}
	};

	var view = {
		catNameDOM: document.getElementById("name"),
		catImageDOM: document.getElementById("image"),
		catClicksDOM: document.getElementById("click-amount"),
		catsListDOM: document.getElementById("cats-list"),

		init: function() {

			document.addEventListener("click", function(e) {
				if (e.target.classList.contains("cat-name")) {
					octopus.setActiveCat(e.target.innerHTML);
				}
			});

			document.getElementById("image").addEventListener("click", function(e) {
				octopus.updateClickAmount();
			});

			view.renderCatsList();
			view.renderActiveCat(octopus.getActiveCat().name);

		},
		renderCatsList: function() {
			var catHTML = ""
			octopus.getCatsList().map(function(cat) {
				catHTML += '<li class="cat-name">' + cat.name + '</div>'
			});
			this.catsListDOM.innerHTML = catHTML;
		},
		renderActiveCat: function(catName) {
			var thisCat = octopus.getActiveCat();
			this.catNameDOM.innerHTML = thisCat.name;
			this.catImageDOM.style.backgroundImage = "url('img/" + thisCat.name.toLowerCase() + ".jpg')";
			this.catClicksDOM.innerHTML = thisCat.clickAmount;
		}
	};

	octopus.init();

};