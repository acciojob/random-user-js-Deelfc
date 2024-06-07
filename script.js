//your code here
document.addEventListener("DOMContentLoaded", () => {
    getRandomUser();
});

async function getRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];
        displayUserInfo(user);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

function displayUserInfo(user) {
    const userImage = document.getElementById('userImage');
    const userName = document.getElementById('userName');

    userImage.src = user.picture.large;
    userName.textContent = `${user.name.first} ${user.name.last}`;

    // Store user data in buttons
    document.querySelector('button[data-attr="age"]').dataset.info = user.dob.age;
    document.querySelector('button[data-attr="email"]').dataset.info = user.email;
    document.querySelector('button[data-attr="phone"]').dataset.info = user.phone;

    // Clear additional info
    document.getElementById('additionalInfo').textContent = '';
}

function showInfo(attribute) {
    const info = document.querySelector(`button[data-attr="${attribute}"]`).dataset.info;
    const additionalInfo = document.getElementById('additionalInfo');

    additionalInfo.textContent = info;
}
