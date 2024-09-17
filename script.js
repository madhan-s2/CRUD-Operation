let people = [];

const modal = document.getElementById("userModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close");

openModalBtn.onclick = function() {
    clearForm();
    modal.style.display = "block";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function addPerson() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const city = document.getElementById('city').value;
    const mobile = document.getElementById('mobile').value;

    if (name && dob && gender && city && mobile) {
        if(mobile.length!=10){
            alert('Please fill correct mobile number.');
        }else{
        people.push({ name, dob, gender, city, mobile });
        clearForm();
        displayPeople();
        modal.style.display = "none"; 
        }
    } else {
        alert('Please fill in all fields.');
    }
}

function displayPeople() {
    const tableBody = document.querySelector('#peopleTable tbody');
    tableBody.innerHTML = ''; 

    people.forEach((person, index) => {
        const row = `
            <tr>
                <td>${person.name}</td>
                <td>${person.dob}</td>
                <td>${person.gender}</td>
                <td>${person.city}</td>
                <td>${person.mobile}</td>
                <td>
                    <button class="edit" onclick="editPerson(${index})">Edit</button>
                    <button class="delete" onclick="deletePerson(${index})">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function editPerson(index) {
    const person = people[index];
    document.getElementById('name').value = person.name;
    document.getElementById('dob').value = person.dob;
    document.getElementById('gender').value = person.gender;
    document.getElementById('city').value = person.city;
    document.getElementById('mobile').value = person.mobile;

    people.splice(index, 1);
    modal.style.display = "block"; 
}

function deletePerson(index) {
    people.splice(index, 1); 
    displayPeople();
}

function clearForm() {
    document.getElementById('personForm').reset();
}
