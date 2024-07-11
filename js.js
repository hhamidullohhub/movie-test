// const movie_ul = document.getElementById('ul')
// const onePage = document.querySelectorAll('.link1')
// const twooPage = document.querySelectorAll('.link2')
// const treePage = document.querySelectorAll('.link3')
// const navbar_years = document.getElementById('navbar_years')
// const paginations = document.getElementById('pagination')
// const movie_year = []




// movies.forEach(movie => {
//     movie_year.push(movie.year)
// })
// const sortMovie = [...new Set(movie_year)].sort((a, b) => b - a);

// renderYear(sortMovie)

// function renderYear(year) {
//     year.forEach(year => {
//         const li = document.createElement('li')
//         const a = document.createElement('a')
//         a.setAttribute('href', '#')
//         a.classList.add('js_year')
//         a.textContent = year
//         a.dataset.year = year
//         console.log(a);
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









///////===========================================/////////











const searchinput = document.getElementById('searchinput')
const movie_ul = document.getElementById('ul');
const navbar_years = document.getElementById('navbar_years');
const paginations = document.getElementById('pagination');
const kinoTur = document.getElementById("kinoTur")
const countryHtml = document.getElementById('country')
const movie_year = [];
const turlar = []
const country = []


searchinput.addEventListener('input', () => {
    const query = searchinput.value.toLowerCase();
    searchResult.textContent = query ? `Qidiruv natijalari: "${query}"` : '';
    const filteredMovies = movies.filter(movie => {
        const title = movie.title.toLowerCase();
        const desc = movie.desc.toLowerCase();
        return title.includes(query) || desc.includes(query);
    });
    renderList(filteredMovies);
});




movies.forEach(movie => {
    movie_year.push(movie.year);
    turlar.push(movie.turi)
    country.push(movie.country)
});


const countrySort = [...new Set(country)].sort((a, b) => b - a);
const sorttur = [...new Set(turlar)].sort((a, b) => b - a);
const sortMovie = [...new Set(movie_year)].sort((a, b) => b - a);






renderYear(sortMovie);
renderPaginationButtons();
renderTypes(sorttur)
renderList(sliceMovies(0));
renderCountry(countrySort)

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
            // movie_ul.innerHTML = null;
            const filteredMovies = movies.filter(movie => movie.year === year);
            renderList(filteredMovies);
        });

        li.append(a);
        navbar_years.prepend(li);
    });
}

function renderTypes(types) {
    types.forEach(type => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.classList.add('js_year')
        a.setAttribute('href', '#')
        a.textContent = type
        a.dataset.type = type
        li.classList.add('class', 'salom');
        a.addEventListener('click', () => {
            // movie_ul.innerHTML = null
            const filteredMovies = movies.filter(movie => movie.turi === type)
            renderList(filteredMovies)
        })

        li.append(a)
        kinoTur.prepend(li)

    })
}


function renderCountry(countryAll) {
    countryAll.forEach(country => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        li.classList.add('salom')
        a.classList.add('js_year')
        a.textContent = country
        a.dataset.country = country

        a.addEventListener('click', () => {
            // movie_ul.innerHTML = null
            const filteredCountry = movies.filter(movie => movie.country === country)
            renderList(filteredCountry)
        })

        li.append(a)
        countryHtml.prepend(li)

    })
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
    console.log(page);
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
        button.classList.add('paginationButton')
        button.dataset.page = i;


        paginations.append(button);

        paginations.addEventListener('click', (event) => {
            console.log(event.target);
            if (event.target.tagName === 'BUTTON') {
                const page = parseInt(event.target.dataset.page);
                const moviesForPage = sliceMovies(page);
                renderList(moviesForPage);
            }
        });
    }
}



////////////---------------------------------------/////////////




///////================================------------===========/////////







// const movie_ul = document.getElementById('ul');
// const navbar_years = document.getElementById('navbar_years');
// const paginations = document.getElementById('pagination');
// const kinoTur = document.getElementById("kinoTur");
// const movie_year = [];
// const turlar = [];

// // Populate movie_year and turlar arrays
// movies.forEach(movie => {
//     movie_year.push(movie.year);
//     turlar.push(movie.turi);
// });

// const sorttur = [...new Set(turlar)].sort();
// const sortMovie = [...new Set(movie_year)].sort((a, b) => b - a);

// renderYear(sortMovie);
// renderTypes(sorttur);
// renderPaginationButtons();
// renderList(sliceMovies(0));

// function renderYear(years) {
//     years.forEach(year => {
//         const li = document.createElement('li');
//         const a = document.createElement('a');
//         a.setAttribute('href', '#');
//         a.classList.add('js_year');
//         a.textContent = year;
//         a.dataset.year = year;
//         li.setAttribute('class', 'salom salom1');
//         a.addEventListener('click', () => {
//             movie_ul.innerHTML = null;
//             const filteredMovies = movies.filter(movie => movie.year === year);
//             renderList(filteredMovies);
//         });

//         li.append(a);
//         navbar_years.prepend(li);
//     });
// }

// function renderTypes(types) {
//     types.forEach(type => {
//         const li = document.createElement('li');
//         const a = document.createElement('a');
//         a.setAttribute('href', '#');
//         a.classList.add('js_type');
//         a.textContent = type;
//         a.dataset.type = type;
//         li.setAttribute('class', 'salom salom1');
//         a.addEventListener('click', () => {
//             movie_ul.innerHTML = null;
//             const filteredMovies = movies.filter(movie => movie.turi === type);
//             renderList(filteredMovies);
//         });

//         li.append(a);
//         kinoTur.append(li);
//     });
// }

// kinoTur.addEventListener('click', (event) => {
//     if (event.target.tagName === 'A') {
//         movie_ul.innerHTML = null;
//         const filteredMovies = movies.filter(movie => movie.turi === event.target.dataset.type);
//         renderList(filteredMovies);
//     }
// });

// function renderList(movies) {
//     movie_ul.innerHTML = null;
//     movies.forEach(movie => {
//         const li = document.createElement('li');
//         const img = document.createElement('img');
//         const title = document.createElement('h3');
//         const desc = document.createElement('p');

//         img.src = movie.img;
//         title.textContent = movie.title;
//         desc.textContent = movie.desc;
//         li.append(img, title, desc);

//         li.classList.add('li');
//         img.classList.add('imgCover');
//         movie_ul.prepend(li);
//     });
// }

// function sliceMovies(page) {
//     const start = page * 8;
//     const end = start + 8;
//     return movies.slice(start, end);
// }

// function renderPaginationButtons() {
//     paginations.innerHTML = '';
//     const totalPages = Math.ceil(movies.length / 8);

//     for (let i = 0; i < totalPages; i++) {
//         const button = document.createElement('button');
//         button.textContent = i + 1;
//         button.classList.add('page-button');
//         button.dataset.page = i;

//         paginations.append(button);
//     }

//     paginations.addEventListener('click', (event) => {
//         if (event.target.tagName === 'BUTTON') {
//             const page = parseInt(event.target.dataset.page);
//             const moviesForPage = sliceMovies(page);
//             renderList(moviesForPage);
//         }
//     });
// }















////////////---------------------------------------/////////////












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


navbar_years.addEventListener("click", (e) => {
    if (e.target.classList.contains('js_year')) {
        console.log(e.target.dataset.year);
    }
    e.stopPropagation()
})