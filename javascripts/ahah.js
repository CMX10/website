function ahah(url, target) {
  var req;
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (req != undefined) {
    req.onreadystatechange = function() {ahahDone(url, req, target);};
    req.open("GET", url, true);
    req.send("");
  }
}

function ahahDone(url, req, target) {

  if (req.readyState == 4) { // only if req is "loaded"
    if (req.status == 200) { // only if "OK"
      document.getElementById(target).innerHTML = req.responseText;
    } else {
      document.getElementById(target).innerHTML="AHAH Error:\n"+ req.status + "\n" +req.statusText;
    }
  }
}



function load(name, target) {
    var url = document.URL.split("/");
    url.pop();
    //Stupid cache force with current time
    var date = Date();
    ahah(url.join("/")+"/pages/"+name+".html?"+date, target);

}