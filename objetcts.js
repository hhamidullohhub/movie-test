


const movies = [
    {
        img: "img/deadpool.jpg",
        title: 'Deadpool',
        year: 2021,
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        country: 'angliya',


    },
    {
        img: "img/black panther.jpg",
        title: 'Black panther 2',
        year: 2021,
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        country: 'xitoy',


    },
    {
        img: "img/farsaj.jpg",
        title: 'Farsaj 8',
        year: 2023,
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        janr: "Tarjima kinolar|Jangar|Serial",
        country: 'Aqsh',
    },
    {
        img: "img/transformers.webp",
        title: 'Spiderman',
        year: 2016,
        desc: 'Avtarobotlar xaqida',
        country: 'xind',

    },
    {
        img: 'img/need.webp',
        title: 'xorlangan moykachi',
        year: 2016,
        desc: 'Need for spped tezlik xaqidagi kino',
        country: 'Rossiya',

    },
    {
        img: 'img/chumoliodam.jpg',
        title: 'xorlangan moykachi',
        year: 2017,
        desc: 'Chumoli odam',
        country: 'Uzbekistan',

    },
    {
        img: 'img/avatar.jpg',
        title: 'xorlangan moykachi',
        year: 2018,
        desc: 'kino detskicha umuman g\alati ishlangan',
        country: 'turkey',

    },
    {
        img: 'img/farsaj.jpg',
        title: 'xorlangan moykachi',
        year: 2015,
        desc: 'Poyga va tez yurar mashinalar xaqida',
        country: 'germany',

    },
    {
        img: 'img/deadpool.jpg',
        title: 'xorlangan moykachi',
        year: 2016,
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'xind',

    },
    {
        img: 'img/spiderman.jpeg',
        title: 'xorlangan moykachi',
        year: 2015,
        desc: 'O\'rgimchak odam yaxshi bola',
        country: 'xind',

    },
    {
        img: 'img/black panther.jpg',
        title: 'xorlangan moykachi',
        year: 2024,
        desc: 'Qora pantera',
        country: 'xind',

    },
    {
        img: "img/img qasoskorla.jpg",
        title: 'xorlangan moykachi',
        year: 2024,
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'xind',

    },
    {
        img: "img/img qasoskorla.jpg",
        title: 'xorlangan moykachi',
        year: 2022,
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'xind',

    },
    {
        img: "img/img qasoskorla.jpg",
        title: 'xorlangan moykachi',
        year: 2022,
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'xind',

    },
    {
        img: "img/black panther.jpg",
        title: 'Black panther 2',
        year: 2021,
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        country: 'xitoy',


    },
    {
        img: "img/farsaj.jpg",
        title: 'Farsaj 8',
        year: 2021,
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        janr: "Tarjima kinolar|Jangar|Serial",
        country: 'Aqsh',
    },
    {
        img: "img/transformers.webp",
        title: 'Spiderman',
        year: 2016,
        desc: 'Avtarobotlar xaqida',
        country: 'xind',

    },
    {
        img: 'img/need.webp',
        title: 'xorlangan moykachi',
        year: 2016,
        desc: 'Need for spped tezlik xaqidagi kino',
        country: 'Rossiya',

    },
    {
        img: 'img/chumoliodam.jpg',
        title: 'xorlangan moykachi',
        year: 2017,
        desc: 'Chumoli odam',
        country: 'Uzbekistan',

    },
    {
        img: 'img/avatar.jpg',
        title: 'xorlangan moykachi',
        year: 2015,
        desc: 'kino detskicha umuman g\alati ishlangan',
        country: 'turkey',

    },
    {
        img: 'img/farsaj.jpg',
        title: 'xorlangan moykachi',
        year: 2020,
        desc: 'Poyga va tez yurar mashinalar xaqida',
        country: 'germany',

    },
    {
        img: 'img/deadpool.jpg',
        title: 'xorlangan moykachi',
        year: 2015,
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'xind',

    },
    {
        img: 'img/spiderman.jpeg',
        title: 'xorlangan moykachi',
        year: 2018,
        desc: 'O\'rgimchak odam yaxshi bola',
        country: 'xind',

    },
    {
        img: 'img/black panther.jpg',
        title: 'xorlangan moykachi',
        year: 2024,
        desc: 'Qora pantera',
        country: 'xind',

    },

]




// const movie_ul = document.getElementById('ul')
// const ul_years = document.getElementById('ul_years')
// const js_year = document.querySelectorAll('.js_year')
// const movie_year = []


// movies.forEach(movie => {
//     const li = document.createElement('li')
//     const img = document.createElement('img')
//     const title = document.createElement('h3')
//     const desc = document.createElement('p')

//     img.src = movie.img
//     title.textContent = movie.title
//     desc.textContent = movie.desc
//     li.append(img, title, desc)

//     li.classList.add('li')
//     img.classList.add('imgCover')
//     movie_ul.prepend(li)
// })

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
//     li.append(a)
//     ul_years.prepend(li)
// })

// js_year.forEach(year => {
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

