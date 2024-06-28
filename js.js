const ul = document.querySelector('.ul')
const header_ul = document.querySelector('.header_ul')
const section1_ul = document.querySelector('section1_ul')
const links_div = document.createElement('div')
const country = document.getElementById('country')
const year15 = document.getElementById('year15')
const year16 = document.getElementById('year16')
const year17 = document.getElementById('year17')
const year18 = document.getElementById('year18')
const year19 = document.getElementById('year19')
const year20 = document.getElementById('year20')
const year21 = document.getElementById('year21')
const year22 = document.getElementById('year22')
const year23 = document.getElementById('year23')
const year24 = document.getElementById('year24')


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

year15.addEventListener('click', () => {
    const filter15 = movies.filter(movie => movie.year == 2015)
    movies.push(filter15)
    movies=[...filter15]
    // console.log(...filter15)
})

year16.addEventListener('click', () => {
    const filter16 = movies.filter(movie => movie.year == 2016)
    console.log(filter16);
    movies.push(filter16)
})








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

