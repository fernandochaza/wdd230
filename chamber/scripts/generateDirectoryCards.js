const baseURL = "https://fernandochaza.github.io/wdd230/";

const directoryURL = "./data/members.json"; 

export async function generateDirectoryCards() {
  const response = await fetch(directoryURL);
  const data = await response.json();

  console.log(data);
  displayCards(data.members);

};

function displayCards(directoryMembers) {
  const cardsContainer = document.querySelector('.members-container');

  directoryMembers.forEach(member => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${member.img}" alt="Image of ${member.name} business" loading="lazy"/>
      <h3>${member.name}</h3>
      <div class="directory-card-text">
        <p>Address: ${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <a href="${member.website}">${member.website}</a>
      </div>

    `;

    cardsContainer.appendChild(li);
  });
   

}

//  "name": "Business 1",
//  "address": "123 Main Street, Caleta Olivia",
//  "phone": "123-456-7890",
//  "website": "https://www.business1.com",
//  "img-filename": "business1.jpg",
//  "membership-level": "Silver"