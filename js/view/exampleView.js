//ExampleView Object constructor
var ExampleView = function (container, DinnerModel) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html("Hello");


	this.model = DinnerModel;



	this.minusButton.click(function(){

		
		


	});

	$("#plusGuest").click(function(){


		// kör setnumberofguests
		// populera fältet med den datan
		this.model.getNumberOfGuests();
	
	});


	$("#minusGuest").click(function(){
    	
	});



	
}
 
