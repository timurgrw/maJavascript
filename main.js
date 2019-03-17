(function(){

  var doc = document;

      dinamTag1 = doc.createElement("div"),
      dinamTag2 = doc.createElement("h2"),
      dinamContent = doc.createTextNode("Динамический элемент"),

      body = doc.getElementById("1"),
      h1 = doc.getElementById("2");


  dinamTag2.appendChild(dinamContent);
  dinamTag1.appendChild(dinamTag2);

  dinamTag1.id = "dinam1";
  dinamTag2.id = "dinam2";

  //body.parentNode.appendChild(dinamTag1);           //добавили динамический элемент
  body.parentNode.replaceChild(dinamTag1, h1);        //заменили элемент; тот же insertBefore, но с заменой





})();
