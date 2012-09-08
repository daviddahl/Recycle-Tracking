function RecyclingDataCollector(){}

RecyclingDataCollector.prototype = {
  collectWeight: function _collectWeight(type, weight, max)
  {
    var err;
    if (!weight || !type) {
      error("Weight and Type are required args");
    }
     var result;
     switch(type) {
       case "recycle":
       result = prompt("Please enter recycling weight:");
       break;
       default:
       error("Sorry, data collection type is unknown");
       return;
     }
    result = parseFloat(weight);
    if (isNaN(result)) {
      error("Please enter a number");
    }
    if (max) {
      if (!(result < max)) {
        error(type + " value is greater than maximum: " + max);
      }
    }
    switch (type) {
    case "recycle":
      this.recycleWeight = result;
      break;
    case "landfill":
      this.landfillWeight = result;
      break;
    case "floor":
      this.floor = parseInt(result);
      break;
    default:
      error("Cannot save result, data collection type is unknown");
      return;
    }
    // then you want to send the data off to the server...
    this.saveToServer();
  },

  saveToServer: function _saveToServer()
  {
    if (this.landfillWeight && this.recycleWeight && this.floorWeight) {
      document.location = "/savedata.html?recycle=" +
        this.recycleWeight +
        "&landfill=" +
        this.landfillWeight +
        "&floor=" +
        this.floorWeight;
    }
    else {
      error("Cannot save, not all data was collected");
    }
  }
};

function error(msg)
{
  var err = msg;
  console.error(msg); // let the developer know what happened
  alert(msg); // let the user know what happened
}

var collector = new RecyclingDataCollector();
collector.collectWeight();
