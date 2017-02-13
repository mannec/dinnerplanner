$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views

	var view1 = new View1($("#view1", model));


	var view2 = new View2($("#view2", model));


});	