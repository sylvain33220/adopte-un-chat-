const animalsToAdopt = [ //les images des chats ne fonctionnent pas j'ai donc remplacé par celles-ci pour que ça marche ...
  {
    name: "Lucky",
    picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Poulet_de_chair.jpg/1200px-Poulet_de_chair.jpg"
  },
  {
    name: "Symba",
    picture: "https://woody.cloudly.space/app/uploads/bourg-en-bresse/2021/05/thumbs/poulet-credit-civb-1-640x640-crop-1622799902.jpg"
  },
  {
    name: "Léo",
    picture: "https://static.wixstatic.com/media/0dacae_503c9d88c20c40e0bce821b5f9028f64~mv2.jpg/v1/fill/w_640,h_490,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0dacae_503c9d88c20c40e0bce821b5f9028f64~mv2.jpg"
  },
  {
    name: "Milo",
    picture: "https://static.vecteezy.com/ti/vecteur-libre/t2/5294040-poulet-courant-drole-dessin-anime-poulet-illustrationle-vectoriel.jpg"
  },
  {
    name: "Charly",
    picture: "https://www.domainedelaperouse.com/wp-content/uploads/2014/09/poulet-de-bresse-aoc-perouse.jpg"
  }
];

 

function createCard(title, imageUrl) {
  animalsToAdopt.map((animalsToAdopt) => {
    
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);
    
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);
    
    const cardImgContainer = document.createElement("img");
    cardImgContainer.classList.add("card-img");
    cardImgContainer.src = `${animalsToAdopt.picture}`;
    cardHeader.appendChild(cardImgContainer);
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body")
    card.appendChild(cardBody);
    
    const titleCard = document.createElement("h2");
    titleCard.classList.add("card-title");
    titleCard.innerHTML = `${animalsToAdopt.name}`;
    cardBody.appendChild(titleCard);
    
    const cardButton = document.createElement("button");
    cardButton.classList.add("card-button");
    cardButton.innerHTML = ("adopt now !");
    cardBody.appendChild(cardButton);
  }) 
}
const header = document.getElementsByTagName("header");

const siteTitle = document.querySelector("header");
siteTitle.innerHTML = "<h1>Adopte un chat !</h1>";
const cards = document.querySelector(".cards")
 document.body.onload = createCard();
