// const ul = document.querySelector('.ul')
// const li_a = document.querySelectorAll('.years')
// const ul_years = document.getElementById('ul_years')
// const movie_year = []


// movies.forEach(movie => {
//     movie_year.push(movie.year)
// })
// movie_year.forEach(year => {
//     const li = document.createElement('li')
//     li.textContent = year
//     ul_years.append(li)
// })

// function renderList(a) {
//     a.forEach((movie) => {
//         const li = document.createElement('li')
//         const img = document.createElement('img')
//         const title = document.createElement('h3')
//         const desc = document.createElement('p')


//         img.src = movie.img
//         img.setAttribute('width', 'auto')
//         img.setAttribute('height', '275px')
//         img.classList.add('imgCover')
//         title.textContent = movie.title
//         desc.textContent = movie.desc
//         li.classList.add('li')
//         title.classList.add('h3')
//         desc.classList.add('p')

//         li.append(img, title, desc)
//         ul.append(li)
//     })
// }


// renderList(movies)  


// li_a.forEach(a => {
//     a.addEventListener('click', () => {
//         ul.innerHTML = null;
//         const yearValue = parseInt(a.textContent)
//         const filteredMovies = movies.filter(movie => movie.year === yearValue);
//         console.log(a);

//     })
// })


















const movie_ul = document.getElementById('ul')
const onePage = document.querySelectorAll('.link1')
const twooPage = document.querySelectorAll('.link2')
const treePage = document.querySelectorAll('.link3')
const navbar_years = document.getElementById('navbar_years')
const movie_year = []

const sliceMovies = movies.slice(0, 8)
const sliceMovies1 = movies.slice(8, 16)
const sliceMovies2 = movies.slice(16, 24)
const sliceMovies3 = movies.slice(24)

movies.forEach(movie => {
    movie_year.push(movie.year)
})
const sortMovie = [...new Set(movie_year)].sort((a, b) => a - b);




function renderList(callback) {
    callback.forEach(movie => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const title = document.createElement('h3')
        const desc = document.createElement('p')

        img.src = movie.img
        title.textContent = movie.title
        desc.textContent = movie.desc
        li.append(img, title, desc)

        li.classList.add('li')
        img.classList.add('imgCover')
        movie_ul.prepend(li)
    })
}

renderList(sliceMovies)


onePage.forEach(page => {
    page.addEventListener('click', () => {
        console.log(page);
        movie_ul.innerHTML = null
        renderList(sliceMovies1)
    })
})

twooPage.forEach(page => {
    page.addEventListener('click', () => {
        movie_ul.innerHTML = null
        renderList(sliceMovies2)
    })
})


treePage.forEach(page => {
    page.addEventListener('click', () => {
        movie_ul.innerHTML = null
        renderList(sliceMovies3)
    })
})














// movies.forEach(movie => {
//     movie_year.push(movie.year)
// })

// const sortMovie = [...new Set(movie_year)].sort((a, b) => b - a);

// sortMovie.forEach((year) => {
//     const li = document.createElement('li')
//     const a = document.createElement('a')
//     a.textContent = year;
//     a.setAttribute('href', '#')
//     a.classList.add('js_year')

//     a.setAttribute('onclick', `edityear(${year})`)
//     li.append(a)
//     ul_years.prepend(li)
// })

// const years = document.querySelectorAll('.js_year')
// console.log(years);

// years.forEach(year => {
//     year.addEventListener('click', () => {
//         movie_ul.innerHTML = null

//         const yearValue = parseInt(year.textContent)
//         const filteredMovies = movies.filter(movie => movie.year === yearValue)

//         filteredMovies.forEach(movie => {
//             const li = document.createElement('li')
//             const img = document.createElement('img')

//             const title = document.createElement('h3')
//             const desc = document.createElement('p')

//             img.src = movie.img
//             title.textContent = movie.title
//             desc.textContent = movie.desc
//             li.classList.add('li')
//             img.classList.add('imgCover')

//             li.append(img, title, desc)

//             movie_ul.prepend(li)
//         })
//     })
// })

























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

