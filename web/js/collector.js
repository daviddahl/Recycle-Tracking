function log(aMsg)
{
  console.log(aMsg);
}

function RecyclingDataCollector(){
  this.floorsInBuilding = floorsInBuilding();
}

RecyclingDataCollector.prototype = {

  collectData: function collectData()
  {
    // TODO: 0 is not valid in recycle and landfill form inputs!
    var floor = $("#floor")[0].value;
    if (floorsInBuilding()[floor] == undefined) {
      alert("There is no floor '" + floor +
            "' in the building. Please enter it again");
      this.reenableButton();
      return;
    }
    this.floor = floor;

    var recycle = parseInt($("#recycle")[0].value);
    if (recycle > this.maxWeight || recycle < 0 || recycle == "" || isNaN(recycle)) {
      alert("Recycle weight is incorrect or exceeds maximum. "
            + "Please enter it again.");
      this.reenableButton();
      return;
    }
    this.recycle = recycle;

    var landfill = parseInt($("#landfill")[0].value);

    if (landfill > this.maxWeight || landfill < 0 || landfill == "" || isNaN(landfill)) {
      alert("Landfill garbage weight is incorrect or exceeds maximum. "
            + "Please enter it again.");
      this.reenableButton();
      return;
    }
    this.landfill = landfill;
    this.confirm();
  },

  maxWeight: 1000,

  saveToServer: function _saveToServer()
  {
    document.location = "savedata.html?type=refuse&recycle=" +
      this.recycle +
      "&landfill=" +
      this.landfill +
      "&floor=" +
      this.floor;
    // TODO: add user badge ID or name
  },

  run: function _run()
  {
    $("#collect-btn")[0].disabled = true;
    this.collectData();
  },

  reenableButton: function reenableButton()
  {
    $("#collect-btn")[0].disabled = false;
  },

  confirm: function confirm()
  {
    $("#collector-main").hide();
    var html = "<div id=\"confirm-input\">"
      + "<p>Floor: " + this.floor +  "</p>"
      + "<p>Recycle: " + this.recycle +  "</p>"
      + "<p>Landfill: " + this.landfill +  "</p>"
      + "</div>";

    $("#confirm").prepend(html);
    $("#confirm").show();
  },

  editData: function editData()
  {
    this.reenableButton();
    $("#confirm-input").remove();
    $("#confirm").hide();
    $("#collector-main").show();
  }

};

function error(msg)
{
  var err = msg;
  console.error(msg); // let the developer know what happened
  alert(msg); // let the user know what happened
}

var collector = new RecyclingDataCollector();

function floorsInBuilding()
{
  var numFloors = 25;
  var floors = [];
  for (var i = 0; i < numFloors; i++) {
    floors.push(i);
  }
  return floors;
}

$(document).ready(function (){
  $("#collect-btn").click(function (){
    collector.run();
  });

  $("#send-btn").click(function (){
    collector.saveToServer();
  });

  $("#edit-btn").click(function (){
    collector.editData();
  });
});
