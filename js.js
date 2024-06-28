const ul = document.querySelector('.ul')
const header_ul = document.querySelector('.header_ul')
const section1_ul = document.querySelector('section1_ul')
const links_div = document.createElement('div')
const country = document.getElementById('country')
// const years = document.querySelectorAll('#years')
// console.log(years)


movies.forEach((movie) => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    const title = document.createElement('h3')
    const desc = document.createElement('p')


    img.src = movie.img
    img.setAttribute('width', 'auto')
    img.setAttribute('height', '275px')
    img.classList.add('imgCover')
    title.textContent = movie.title
    desc.textContent = movie.desc
    li.classList.add('li')
    title.classList.add('h3')
    desc.classList.add('p')

    li.append(img, title, desc)
    ul.append(li)
})


const years = document.querySelectorAll('#year .years');

years.forEach(year => {
    console.log(year);
    
    year.addEventListener('click', () => {
        const yearValue = parseInt(year.textContent); // Berilgan yil qiymatini olamiz
        const filteredMovies = movies.filter(movie => movie.year === yearValue);
        console.log(filteredMovies);
    });
});










document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        console.log('Foydalanuvchi nomi:', username);
        console.log('Email:', email);
        console.log('Parol:', password);

        // Bu yerda ma'lumotlarni serverga yuborish yoki saqlash uchun kod yozish mumkin

        // Modalni yopish
        const modal = bootstrap.Modal.getInstance(document.getElementById('registrationModal'));
        modal.hide();
    } else {
        alert('Parollar mos emas!');
    }
});


document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    console.log('Email:', email);
    console.log('Parol:', password);

    // Bu yerda ma'lumotlarni serverga yuborish yoki saqlash uchun kod yozish mumkin

    // Modalni yopish
    const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    modal.hide();
});



document.addEventListener('DOMContentLoaded', () => {
    const likeIcons = document.querySelectorAll('.like-icon');
    const dislikeIcons = document.querySelectorAll('.dislike-icon');

    likeIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            let likeCountElement = icon.nextElementSibling;
            let likeCount = parseInt(likeCountElement.textContent);
            likeCount++;
            likeCountElement.textContent = likeCount;
            icon.style.color = 'blue'; // Ikonkani rangini o'zgartirish
        });
    });

    dislikeIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            let dislikeCountElement = icon.nextElementSibling;
            let dislikeCount = parseInt(dislikeCountElement.textContent);
            dislikeCount++;
            dislikeCountElement.textContent = dislikeCount;
            icon.style.color = 'red'; // Ikonkani rangini o'zgartirish
        });
    });
});

