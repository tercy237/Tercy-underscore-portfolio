
// Mobile menu toggle
const mobileMenu = document.getElementById("mobile_menu");
mobileMenu.addEventListener("click",()=>{
    const desktopMenu = document.getElementById("desktop_menu");
    desktopMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
})
//Declaration of project array
const projects = [
    {
        Image: "./assets/images/imagetwo.png",
        title: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails','Css','Javascript','HTML'],
        button: "See project"
    },
     {
        Image: "./assets/images/imagetwo.png",
        title: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails','Css','Javascript','HTML'],
        button: "See project"
    }, {
        Image: "./assets/images/imagetwo.png",
        title: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails','Css','Javascript','HTML'],
        button: "See project"
    }, {
        Image: "./assets/images/imagetwo.png",
        title: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails','Css','Javascript','HTML'],
        button: "See project"
    }, {
        Image: "./assets/images/imagetwo.png",
        title: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails','Css','Javascript','HTML'],
        button: "See project"
    }, {
        Image: "./assets/images/imagetwo.png",
        title: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails','Css','Javascript','HTML'],
        button: "See project"
    }
];
//creation of project cards
function createProjectCard(project){
    const proCard = document.createElement("div");
    proCard.classList.add("pro_card");
    const cardImageContainer = document.createElement("span");
    proCard.appendChild(cardImageContainer);
    const cardImage = document.createElement("img");
cardImage.src = project.Image;
cardImage.alt = "project card image";
cardImageContainer.appendChild(cardImage);
const cardTextContainer = document.createElement("span");
proCard.appendChild(cardTextContainer);
const cardTitlle = document.createElement('h3');
cardTitlle.innerHTML = project.title;
cardTextContainer.appendChild(cardTitlle);
const cardList = document.createElement("ul");
project.technologies.forEach(element => {
    const listItem = document.createElement("li");
listItem.innerHTML = element;
cardList.appendChild(listItem);
});
cardTextContainer.appendChild(cardList);
const cardBtn = document.createElement("button");
cardBtn.innerHTML = "See project";
cardTextContainer.appendChild(cardBtn);
return proCard;
};
//insertion of cards into the DOM
function insertCards(){
    const projectCardsContainer = document.getElementById("pro_cards");
    projects.forEach(project => {
  const projectCard = createProjectCard(project);
  projectCardsContainer.appendChild(projectCard);      
    });
}
//cards are rendered when page loads
document.addEventListener("DOMContentLoaded", insertCards);