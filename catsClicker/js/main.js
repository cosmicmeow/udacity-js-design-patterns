window.onload = function(){

	var model = {
		init: function() {
			this.activeCat = {},
			this.catsList = [
				{
					"name": "Salem", 
					"clickAmount": 0,
					"imageURL": "img/salem.jpg"
				},
				{
					"name": "Tom", 
					"clickAmount": 0,
					"imageURL": "img/tom.jpg"
				},
				{
					"name": "Doraemon", 
					"clickAmount": 0,
					"imageURL": "img/doraemon.jpg"
				},
				{
					"name": "Chi", 
					"clickAmount": 0,
					"imageURL": "img/chi.jpg"
				},
				{
					"name": "Jiji", 
					"clickAmount": 0,
					"imageURL": "img/jiji.jpg"
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
		updateCatsList: function(name, clicks, imageURL) {
			model.catsList.map(function(data){
				if (model.activeCat.name === data.name) {
					data.name = name;
					data.clickAmount = clicks;
					data.imageURL = imageURL;
				}
			});
			view.renderCatsList();
			this.setActiveCat(name);
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
		adminAreaDOM: document.getElementById("admin-area"),

		nameInputDOM: document.getElementById("admin-area").getElementsByTagName("input")[0],
		clickInputDOM: document.getElementById("admin-area").getElementsByTagName("input")[1],
		imageInputDOM: document.getElementById("admin-area").getElementsByTagName("input")[2],

		init: function() {

			document.addEventListener("click", function(e) {
				if (e.target.classList.contains("cat-name")) {
					octopus.setActiveCat(e.target.innerHTML);
				} else if (e.target.classList.contains("admin-btn") || e.target.classList.contains("cancel-btn")) {
					view.toggleAdminArea(e);
				} else if (e.target.classList.contains("save-btn")) {
					octopus.updateCatsList(view.nameInputDOM.value, view.clickInputDOM.value, view.imageInputDOM.value);
				}
			});

			document.getElementById("image").addEventListener("click", function(e) {
				octopus.updateClickAmount();
			});

			view.renderCatsList();
			view.renderActiveCat(octopus.getActiveCat().name);

		},
		toggleAdminArea: function(e) {
			this.adminAreaDOM.classList.toggle("show");
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
			this.catImageDOM.style.backgroundImage = "url('" + thisCat.imageURL + "')";
			this.catClicksDOM.innerHTML = thisCat.clickAmount;

			this.nameInputDOM.value = thisCat.name;
			this.clickInputDOM.value = thisCat.clickAmount;
			this.imageInputDOM.value = thisCat.imageURL;
		}
	};

	octopus.init();

};