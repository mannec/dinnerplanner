//ExampleView Object constructor
var View2 = function (container, DinnerModel) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)


	this.confirmbtn = container.find("#confirmbtn");

	this.logga = container.find("#logga");

    this.header = container.find("#headerrow");
	
	this.bigrow = container.find("#bigrow");

	this.tagline = container.find("#tagline");

	this.numberOfGuests = container.find("#getNumberOfGuests");
	


	

	this.header.click(function(){
    	this.header.hide();
	});



	$("#btn1").click(function(){
    	alert("Value: " + $("#test").val());
	});


	
}
 
