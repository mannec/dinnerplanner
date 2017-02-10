//ExampleView Object constructor
var View1 = function (container, DinnerModel) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	

	this.startbtn = container.find("#startbtn");

	this.logga = container.find("#logga");

	this.header = container.find("#headerrow");

	this.model = DinnerModel;

	this.logga.html("hahahahahahah");


    
	this.startbtn.click(function(){

		
		this.header.hide();
		


	});

	this.logga.click(function(){

		
		this.header.hide();
		


	});

	
}
 
