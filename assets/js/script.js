
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
        button: "See project",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        liveLink: "https://tercy-portfolio.vercel.app/",
        githubLink: "https://github.com/tercy237/Tercy-underscore-portfolio"
    },
     {
        Image: "./assets/images/imagetwo.png",
        title: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails','Css','Javascript','HTML'],
        button: "See project",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        liveLink: "https://tercy-portfolio.vercel.app/",
        githubLink: "https://github.com/tercy237/Tercy-underscore-portfolio"
    },
     {
        Image: "./assets/images/imagetwo.png",
        title: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails','Css','Javascript','HTML'],
        button: "See project",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        liveLink: "https://tercy-portfolio.vercel.app/",
        githubLink: "https://github.com/tercy237/Tercy-underscore-portfolio"
    },
     {
        Image: "./assets/images/imagetwo.png",
        title: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails','Css','Javascript','HTML'],
        button: "See project",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        liveLink: "https://tercy-portfolio.vercel.app/",
        githubLink: "https://github.com/tercy237/Tercy-underscore-portfolio"
    },
     {
        Image: "./assets/images/imagetwo.png",
        title: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails','Css','Javascript','HTML'],
        button: "See project",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        liveLink: "https://tercy-portfolio.vercel.app/",
        githubLink: "https://github.com/tercy237/Tercy-underscore-portfolio"
    },
     {
        Image: "./assets/images/imagetwo.png",
        title: "Multi-Post Stories Gain+Glory",
        technologies: ['Ruby on Rails','Css','Javascript','HTML'],
        button: "See project",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
        liveLink: "https://tercy-portfolio.vercel.app/",
        githubLink: "https://github.com/tercy237/Tercy-underscore-portfolio"
    }
];
//close modal
let modalTrigger = null;

function closeModal(){
    const modal = document.getElementById("project_modal");
    if(modal){
        modal.remove();
    }
    if(modalTrigger){
        modalTrigger.focus();
        modalTrigger = null;
    }
}
//opening of modal
function openModal(project){
    const modal = document.createElement("div");
    modal.id = "project_modal";
    modal.classList.add("project_modal");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "project_modal_title");
    modal.tabIndex = -1;
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal_content");
    modal.appendChild(modalContent);
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.classList.add("close_Btn");
    closeBtn.textContent = "\u00D7";
    closeBtn.setAttribute("aria-label", "Close project details");
    closeBtn.addEventListener("click", closeModal);
    modalContent.appendChild(closeBtn);
    const modalImage = document.createElement("img");
    modalImage.src = project.Image;
    modalImage.alt = "project modal image";
    modalContent.appendChild(modalImage);
    const modalTitle = document.createElement("h3");
    modalTitle.id = "project_modal_title";
    modalTitle.textContent = project.title;
    modalContent.appendChild(modalTitle);
    const modalList = document.createElement("ul");
    project.technologies.forEach(element => {
      const modalItem = document.createElement("li");
      modalItem.textContent = element;
      modalList.appendChild(modalItem);  
    });
    modalContent.appendChild(modalList);
    const modalDescription = document.createElement("p");
    modalDescription.textContent = project.description;
    modalContent.appendChild(modalDescription);
    const modalLinks = document.createElement("span");
    const liveLink = document.createElement("a");
    liveLink.href = project.liveLink;
    liveLink.textContent = "See Live";
    liveLink.target = "_blank";
    liveLink.rel = "noopener noreferrer";
    const sourceLink = document.createElement("a");
    sourceLink.href = project.githubLink;
    sourceLink.textContent = "See Source";
    sourceLink.target = "_blank";
    sourceLink.rel = "noopener noreferrer";
    modalLinks.appendChild(liveLink);
    modalLinks.appendChild(sourceLink);
    modalContent.appendChild(modalLinks);
    modal.addEventListener("click", (event) => {
        if(event.target === modal){
            closeModal();
        }
    });
    modal.addEventListener("keydown", (event) => {
        if(event.key === "Escape"){
            closeModal();
        }
    });
    modalTrigger = document.activeElement;
    document.body.appendChild(modal);
    modal.style.display = "flex";
    modal.focus();
}
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
cardBtn.type = "button";
cardBtn.textContent = project.button;
cardBtn.addEventListener("click", () => openModal(project));
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