window.addEventListener("DOMContentLoaded", (event) => {



    


  });

  function add(){

    var titre = document.getElementById("Titre").value;
    var prix = document.getElementById("Prix").value;
    var map = document.getElementById("Map").value;
    var img = document.getElementById("Img").value;
    var url = document.getElementById("Url").value;
    
    // create div
    var newDiv = document.createElement("div");
    var newDivImg = document.createElement("div");

    var newA = document.createElement("a");
    
    var newimg = document.createElement("img");

    // attribute
    newDiv.setAttribute('class', 'content');
    newDivImg.setAttribute('class', 'img');
    newA.setAttribute('href', url );
    newimg.setAttribute('src', img );


    // et lui donne un peu de contenu
    
    var newContent = document.createTextNode('Hi there and greetings!');
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);
  
    // ajoute le nouvel élément créé et son contenu dans le DOM

    var currentDiv = document.getElementById('bo');
    currentDiv.appendChild(newDiv);

    let max = document.getElementsByClassName('content').length
    var currentDiv2 = document.getElementsByClassName('content')[max-1];
    currentDiv2.appendChild(newDivImg);

    let max2 = document.getElementsByClassName('img').length
    var currentA = document.getElementsByClassName('img')[max2-1];
    currentA.appendChild(newA);

//console.log(document.getElementsByTagName('a'))
    //currentimg.appendChild(newimg);
    for(let elt of currentA.children ){
        //console.log(elt);
        elt.appendChild(newimg);
    }



    


}
