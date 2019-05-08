// This is the controller for the Recepie (Expanded content) view

/*

  - Leggere il parametro ID
  - Richiedere al DB la ricetta relativa all'ID
  - Mostrare la ricetta nella view

*/

var db = firebase.firestore();

function loadRecepie(){
  var recepieId = getIdFromURL();
  db.collection('recepies')
    .doc(recepieId)
    .onSnapshot((function(item)) {
      var recepie = item.data();
      console.log(recepieId);
      addRecipie(recipie, recipieId);
  });
}

function getIdFromURL(){
  return findGetParameter('id');
}

function findGetParameter(parameterName) {
  var result = null,
      tmp = [];
  location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
      const urlParams = new URLSearchParams(window.location.search);
      const myParam = urlParams.get('myParam');
  return result;
}
function addRecepie(recipie, recipieId){
  var $sourceElement = $('#recepie_source_container .recepie_source');
  var $newElement = $sourceElement.clone();

  var title = recipie.name;

  console.log(title);
  $('').text(title);
}

// init 
loadRecepie();