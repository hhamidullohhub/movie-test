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


















// const movie_ul = document.getElementById('ul')
// const onePage = document.querySelectorAll('.link1')
// const twooPage = document.querySelectorAll('.link2')
// const treePage = document.querySelectorAll('.link3')
// const navbar_years = document.getElementById('navbar_years')
// const paginations = document.getElementById('pagination')
// const movie_year = []

// const sliceMovies = movies.slice(0, 8)
// const sliceMovies1 = movies.slice(8, 16)
// const sliceMovies2 = movies.slice(16, 24)
// const sliceMovies3 = movies.slice(24)

// movies.forEach(movie => {
//     movie_year.push(movie.year)
// })
// const sortMovie = [...new Set(movie_year)].sort((a, b) => b - a);

// renderYear(sortMovie)

// function renderYear(year) {
//     year.forEach(year => {
//         const li = document.createElement('li')
//         console.log(li);
//         const a = document.createElement('a')
//         a.setAttribute('href', '#')
//         a.classList.add('js_year')
//         a.textContent = year
//         a.dataset.year = year
//         li.setAttribute("class", "salom salom1")
//         a.addEventListener('click', () => {
//             movie_ul.innerHTML = null
//             const filteredMovies = movies.filter(movie => movie.year === year)
//             renderList(filteredMovies)
//         })

//         li.append(a)
//         navbar_years.prepend(li)
//     })
// }



// function renderList(callback) {
//     callback.forEach(movie => {
//         const li = document.createElement('li')
//         const img = document.createElement('img')
//         const title = document.createElement('h3')
//         const desc = document.createElement('p')

//         img.src = movie.img
//         title.textContent = movie.title
//         desc.textContent = movie.desc
//         li.append(img, title, desc)

//         li.classList.add('li')
//         img.classList.add('imgCover')
//         movie_ul.prepend(li)
//     })
// }

// renderList(sliceMovies)


// onePage.forEach(page => {
//     page.addEventListener('click', () => {
//         console.log(page);
//         movie_ul.innerHTML = null
//         renderList(sliceMovies1)
//     })
// })

// twooPage.forEach(page => {
//     page.addEventListener('click', () => {
//         movie_ul.innerHTML = null
//         renderList(sliceMovies2)
//     })
// })


// treePage.forEach(page => {
//     page.addEventListener('click', () => {
//         movie_ul.innerHTML = null
//         renderList(sliceMovies3)
//     })
// })






const movie_ul = document.getElementById('ul');
const navbar_years = document.getElementById('navbar_years');
const paginations = document.getElementById('pagination');
const movie_year = [];

movies.forEach(movie => {
    movie_year.push(movie.year);
});

const sortMovie = [...new Set(movie_year)].sort((a, b) => b - a);

renderYear(sortMovie);
renderPaginationButtons();
renderList(sliceMovies(0));

function renderYear(years) {
    years.forEach(year => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', '#');
        a.classList.add('js_year');
        a.textContent = year;
        a.dataset.year = year;
        li.setAttribute('class', 'salom salom1');
        a.addEventListener('click', () => {
            movie_ul.innerHTML = null;
            const filteredMovies = movies.filter(movie => movie.year === year);
            renderList(filteredMovies);
        });

        li.append(a);
        navbar_years.prepend(li);
    });
}

function renderList(movies) {
    movie_ul.innerHTML = null;
    movies.forEach(movie => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const title = document.createElement('h3');
        const desc = document.createElement('p');

        img.src = movie.img;
        title.textContent = movie.title;
        desc.textContent = movie.desc;
        li.append(img, title, desc);

        li.classList.add('li');
        img.classList.add('imgCover');
        movie_ul.prepend(li);
    });
}

function sliceMovies(page) {
    const start = page * 8;
    const end = start + 8;
    return movies.slice(start, end);
}

function renderPaginationButtons() {
    paginations.innerHTML = '';
    const totalPages = Math.ceil(movies.length / 8);

    for (let i = 0; i < totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i + 1;
        button.classList.add('page-button');
        button.dataset.page = i;
        button.addEventListener('click', () => {
            const page = parseInt(button.dataset.page);
            const moviesForPage = sliceMovies(page);
            renderList(moviesForPage);
        });
        paginations.append(button);
    }
}
















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


navbar_years.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("js_year")) {
        console.log(evt.target.dataset.year);
    }

    evt.stopPropagation()
})