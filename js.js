window.addEventListener("DOMContentLoaded", (event) => {

    name()

  });


  function name(){
    var nbr = document.getElementsByClassName("img").length;
    var newIframe = document.createElement("iframe");

    newIframe.setAttribute('class', 'voteBox');
    newIframe.setAttribute('title', 'voteBox');
    newIframe.setAttribute('src', 'https://www.surveylegend.com/s/3o8o');

    
    for(i = 0; i < nbr; i++){
        var newH1 = document.createElement("h1");
        var newContent = document.createTextNode('Hébergement ' + i);
        newH1.appendChild(newContent);
        

        var currentDiv2 = document.getElementsByClassName('img')[i];
        console.log(newIframe)

        currentDiv2.appendChild(newH1);
        //currentDiv2.appendChild(newIframe);

    }

  }


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



var etat = 1;


function vote(){
  var voteButton = document.getElementById("vote");
  var voteBox = document.getElementById("voteBox");
 
  console.log(etat);

  if(etat == 1){
    voteBox.style.bottom=("0%");
    voteButton.style.bottom=(voteBox.clientHeight );
  
  //console.log(etat +" ++");

  etat++;
    return;
  }
  if(etat == 2){
    voteBox.style.bottom=("-61%");
    voteButton.style.bottom=("5%");
    //console.log(etat +" --");

    etat--;
    return;

  }

  
  
}
