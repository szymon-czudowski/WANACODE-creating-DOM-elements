// Task 1 - Display a simple business card for every user

const people = [
    {
        firstName: 'Jan',
        lastName: 'Kowalski',
        profession: 'Web developer'
    },
    {
        firstName: 'John',
        lastName: 'Smith',
        profession: 'Designer'
    }
]

function simpleBusinessCard (people) {
    const container = document.getElementById('business-cards');

    people.forEach(people => {
        const card = document.createElement('div');
        card.classList.add("business-card");

        const firstNameElement = document.createElement("p");
        firstNameElement.textContent = `First name: ${people.firstName}`

        const lastNameElement = document.createElement("p");
        lastNameElement.textContent = `Last name: ${people.lastName}`

        const professionElement = document.createElement("p");
        professionElement.textContent = `Profession: ${people.profession}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = 'Remove';
        removeButton.addEventListener("click", ()=> {
            container.removeChild(card);
        });

        const cloneButton = document.createElement("button");
        cloneButton.textContent = "Clone";
        cloneButton.addEventListener("click", () => {
            const clonedCard = card.cloneNode(true);
            container.appendChild(clonedCard);
        });

        card.appendChild(firstNameElement);
        card.appendChild(lastNameElement);
        card.appendChild(professionElement);
        card.appendChild(removeButton);
        card.appendChild(cloneButton);
        container.appendChild(card);
    })
}

simpleBusinessCard(people.reverse());