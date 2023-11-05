// Task 1 - Display a simple business card for every user
// Task 2 - Display the above cards in the reverse order
// Task 3 - Add a remove button inside each card that deletes it
// Task 4 - Add a clone button inside each card that clones it. Make sure that the buttons inside the cloned card work properly.
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

    function onRemoveClick(event) {
        event.target.parentNode.remove();
    }

    function onCloneClick(event) {

        const card = event.target.parentNode.cloneNode(true);
        const cloneButtonElement = card.getElementsByClassName("clone-button")[0];

        if (cloneButtonElement) {
            cloneButtonElement.addEventListener("click", onCloneClick)
        }
        const removeButtonElement = card.getElementsByClassName("remove-button")[0];
        if (removeButtonElement) {
            removeButtonElement.addEventListener("click", onRemoveClick)
        }

        container.appendChild(card);
    }
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
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", onRemoveClick);

        const cloneButton = document.createElement("button");
        cloneButton.textContent = "Clone";
        cloneButton.classList.add("clone-button");
        cloneButton.addEventListener("click", onCloneClick);

        card.appendChild(firstNameElement);
        card.appendChild(lastNameElement);
        card.appendChild(professionElement);
        card.appendChild(removeButton);
        card.appendChild(cloneButton);
        container.appendChild(card);
    })
}

simpleBusinessCard(people.reverse());
