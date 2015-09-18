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
		},
		updateClickAmount: function() {
			model.activeCat.clickAmount++;
				model.catsList.map(function(data){
					if (model.activeCat.name === data.name) {
						data = model.activeCat;
					}
				});
			view.renderActiveCat(model.activeCat.name);
		}
	};

	var octopus = {
		init: function() {
			model.init();
			view.init();
		},
		setActiveCat: function(catName) {
			model.catsList.map(function(cat) {
				if (catName === cat.name) {
					model.activeCat =  cat;
				}
			});
			view.renderActiveCat(model.activeCat.name);
		}
	};

	var view = {
		init: function() {

			document.addEventListener("click", function(e) {
				if (e.target.classList.contains("cat-name")) {
					octopus.setActiveCat(e.target.innerHTML);
				}
			});

			document.getElementById("image").addEventListener("click", function(e) {
				model.updateClickAmount();
			});

			view.renderCatsList();
			view.renderActiveCat(model.activeCat.name);

		},
		renderCatsList: function() {
			var catsListDOM = document.getElementById("cats-list");
			var catHTML = ""
			model.catsList.map(function(cat) {
				catHTML += '<li class="cat-name">' + cat.name + '</div>'
			});
			catsListDOM.innerHTML = catHTML;
		},
		renderActiveCat: function(catName) {
			var catNameDOM = document.getElementById("name");
			var catImageDOM = document.getElementById("image");
			var catClicksDOM = document.getElementById("click-amount");

			catNameDOM.innerHTML = model.activeCat.name;
			catImageDOM.style.backgroundImage = "url('img/" + model.activeCat.name.toLowerCase() + ".jpg')";
			catClicksDOM.innerHTML = model.activeCat.clickAmount;
		}
	};

	octopus.init();

};