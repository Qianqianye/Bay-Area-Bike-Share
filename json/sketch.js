var theData;

function preload() {
	var url = 'stations.json';
	theData =  loadJSON(url) ;

}

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(255);
	noStroke();

	var dataArray = theData.stationBeanList;
	// var feature = allLayers.featureCollection.layers[0];
	// var dataArray = feature.featureSet.features; 


	var arrayDataOut = [];

	for (var i = 0; i < dataArray.length; i++) {
		var nowData = dataArray[i];
		var Lat = nowData.latitude;
		var Long = nowData.longitude;
		var NUM = nowData.availableBikes;

		arrayDataOut.push(Lat);
		arrayDataOut.push(Long);
		arrayDataOut.push(NUM);

};

save(arrayDataOut, 'myData.json'); 
print(arrayDataOut);
// print(dataArray);
}

function draw() {	
	// print (theData);
}