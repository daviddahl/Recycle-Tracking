function RecyclingDataCollector(){}

RecyclingDataCollector.prototype = {
  collectWeight: function _collectWeight(type, weight, max)
  {
    var err;
    type = type || "recycle"; // default value "recycle"
    weight = weight || parseFloat(prompt("Please enter weight:")); //prompt for weight if not passed in

    if (isNaN(weight)) { //verify is number
      error("Please enter a number");
    }

    if (max) {//verify less than max
      if (!(weight < max)) {
        error(type + " value is greater than maximum: " + max);
      }
    }

    switch (type) {
    case "recycle":
      this.recycleWeight = weight;
      break;
    case "landfill":
      this.landfillWeight = weight;
      break;
    case "floor":
      this.floor = parseInt(weight);
      break;
    default:
      error("Cannot save result, data collection type is unknown");
      return;
    }
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
collector.collectWeight("recycle");
collector.collectWeight("landfill");
collector.collectWeight("floor");
collector.saveToServer();
