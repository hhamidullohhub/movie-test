


const movies = [
    {
        img: "img/deadpool.jpg",
        title: 'Deadpool',
        year: 2021,
        turi: 'komediya',
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        country: 'angliya',


    },
    {
        img: "img/black panther.jpg",
        title: 'Black panther 2',
        year: 2021,
        turi: 'dramma',
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        country: 'xitoy',


    },
    {
        img: "img/farsaj.jpg",
        title: 'Farsaj 8',
        year: 2023,
        turi: 'komediya',
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        janr: "Tarjima kinolar|Jangar|Serial",
        country: 'Aqsh',
    },
    {
        img: "img/transformers.webp",
        title: 'Spiderman',
        year: 2016,
        turi: 'melodramma',
        desc: 'Avtarobotlar xaqida',
        country: 'xind',

    },
    {
        img: 'img/need.webp',
        title: 'xorlangan moykachi',
        year: 2016,
        turi: 'sarguzasht',
        desc: 'Need for spped tezlik xaqidagi kino',
        country: 'Rossiya',

    },
    {
        img: 'img/chumoliodam.jpg',
        title: 'xorlangan moykachi',
        year: 2017,
        turi: 'qorqinchili',
        desc: 'Chumoli odam',
        country: 'Uzbekistan',

    },
    {
        img: 'img/avatar.jpg',
        title: 'xorlangan moykachi',
        year: 2018,
        turi: 'tarixiy',
        desc: 'kino detskicha umuman g\alati ishlangan',
        country: 'Uzbekistan',

    },
    {
        img: 'img/farsaj.jpg',
        title: 'xorlangan moykachi',
        year: 2015,
        turi: 'klassika',
        desc: 'Poyga va tez yurar mashinalar xaqida',
        country: 'germany',

    },
    {
        img: 'img/deadpool.jpg',
        title: 'xorlangan moykachi',
        year: 2016,
        turi: 'fantastika',
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'xind',

    },
    {
        img: 'img/spiderman.jpeg',
        title: 'xorlangan moykachi',
        year: 2015,
        turi: 'hayotiy',
        desc: 'O\'rgimchak odam yaxshi bola',
        country: 'xind',

    },
    {
        img: 'img/black panther.jpg',
        title: 'xorlangan moykachi',
        year: 2024,
        turi: 'Fansatika',
        desc: 'Qora pantera',
        country: 'xind',

    },
    {
        img: "img/img qasoskorla.jpg",
        title: 'xorlangan moykachi',
        year: 2024,
        turi: 'qorqinchli',
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'Avstraliya',

    },
    {
        img: "img/img qasoskorla.jpg",
        title: 'xorlangan moykachi',
        year: 2022,
        turi: 'hayotiy',
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'Turkiya',

    },
    {
        img: "img/img qasoskorla.jpg",
        title: 'xorlangan moykachi',
        year: 2022,
        turi: 'hayotiy',
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'Turkiya',

    },
    {
        img: "img/black panther.jpg",
        title: 'Black panther 2',
        year: 2021,
        turi: 'melodramma',
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        country: 'xitoy',


    },
    {
        img: "img/farsaj.jpg",
        title: 'Farsaj 8',
        year: 2021,
        turi: 'komediya',
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        janr: "Tarjima kinolar|Jangar|Serial",
        country: 'Aqsh',
    },
    {
        img: "img/transformers.webp",
        title: 'Spiderman',
        year: 2016,
        turi: 'dramma',
        desc: 'Avtarobotlar xaqida',
        country: 'Turkiya',

    },
    {
        img: 'img/need.webp',
        title: 'xorlangan moykachi',
        year: 2016,
        turi: 'hayotiy',
        desc: 'Need for spped tezlik xaqidagi kino',
        country: 'Rossiya',

    },
    {
        img: 'img/chumoliodam.jpg',
        title: 'xorlangan moykachi',
        year: 2017,
        turi: 'komediya',
        desc: 'Chumoli odam',
        country: 'Uzbekistan',

    },
    {
        img: 'img/avatar.jpg',
        title: 'xorlangan moykachi',
        year: 2015,
        turi: 'dramma',
        desc: 'kino detskicha umuman g\alati ishlangan',
        country: 'Avstraliya',

    },
    {
        img: 'img/farsaj.jpg',
        title: 'xorlangan moykachi',
        year: 2020,
        turi: 'hayotiy',
        desc: 'Poyga va tez yurar mashinalar xaqida',
        country: 'germany',

    },
    {
        img: 'img/deadpool.jpg',
        title: 'xorlangan moykachi',
        year: 2015,
        turi: 'qorqinchli',
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'hindiston',

    },
    {
        img: 'img/spiderman.jpeg',
        title: 'xorlangan moykachi',
        year: 2018,
        turi: 'jangari',
        desc: 'O\'rgimchak odam yaxshi bola',
        country: 'xind',

    },
    {
        img: 'img/black panther.jpg',
        title: 'black panther',
        year: '2024',
        turi: 'Fansatika',
        desc: 'Qora pantera',
        country: 'hindiston',

    },
    {
        img: "img/deadpool.jpg",
        title: 'Deadpool',
        year: 2021,
        turi: 'qorqinchli',
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        country: 'angliya',


    },
    {
        img: "img/black panther.jpg",
        title: 'Black panther 2',
        year: 2021,
        turi: 'qorqinchli',
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        country: 'xitoy',


    },
    {
        img: "img/farsaj.jpg",
        title: 'Farsaj 8',
        year: 2023,
        turi: 'melodramma',
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        janr: "Tarjima kinolar|Jangar|Serial",
        country: 'Aqsh',
    },
    {
        img: "img/transformers.webp",
        title: 'transformers',
        year: 2016,
        turi: 'qorqinchli',
        desc: 'Avtarobotlar xaqida',
        country: 'Turkiya',

    },
    {
        img: 'img/need.webp',
        title: 'need',
        year: 2016,
        turi: 'melodramma',
        desc: 'Need for spped tezlik xaqidagi kino',
        country: 'hindiston',

    },
    {
        img: 'img/chumoliodam.jpg',
        title: 'chumoliodam',
        year: 2017,
        turi: 'qorqinchli',
        desc: 'Chumoli odam',
        country: 'Uzbekistan',

    },
    {
        img: 'img/avatar.jpg',
        title: 'avatar',
        year: 2018,
        turi: 'qorqinchli',
        desc: 'kino detskicha umuman g\alati ishlangan',
        country: 'Amerika',

    },
    {
        img: 'img/farsaj.jpg',
        title: 'farsaj',
        year: 2015,
        turi: 'multik',
        desc: 'Poyga va tez yurar mashinalar xaqida',
        country: 'Amerika',

    },
    {
        img: 'img/deadpool.jpg',
        title: 'deadpool',
        year: 2016,
        turi: 'melodramma',
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'xind',

    },
    {
        img: 'img/spiderman.jpeg',
        title: 'spiderman',
        year: 2015,
        turi: 'multik',
        desc: 'O\'rgimchak odam yaxshi bola',
        country: 'hindiston',

    },
    {
        img: 'img/black panther.jpg',
        title: 'Qora pantera',
        year: 2024,
        turi: 'jangari',
        desc: 'Qora pantera',
        country: 'xind',

    },
    {
        img: "img/img qasoskorla.jpg",
        title: 'xorlangan moykachi',
        year: 2024,
        turi: 'melodramma',
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'xind',

    },
    {
        img: "img/img qasoskorla.jpg",
        title: 'xorlangan moykachi',
        year: 2022,
        turi: 'multik',
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'Avstraliya',

    },
    {
        img: "img/img qasoskorla.jpg",
        title: 'xorlangan moykachi',
        year: 2022,
        turi: 'sarguzashtli',
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'Avstraliya',

    },
    {
        img: "img/black panther.jpg",
        title: 'Black panther 2',
        year: 2021,
        turi: 'sarguzashtli',
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        country: 'xitoy',


    },
    {
        img: "img/farsaj.jpg",
        title: 'Farsaj 8',
        year: 2021,
        turi: 'sarguzashtli',
        desc: 'yoqud ijodkor 1999-yil xorazm viloyatida tavallud topadi keyin u xorlangan moykachi bolib qoladi',
        janr: "Tarjima kinolar|Jangar|Serial",
        country: 'Aqsh',
    },
    {
        img: "img/transformers.webp",
        title: 'Spiderman',
        year: 2016,
        turi: 'jangari',
        desc: 'Avtarobotlar xaqida',
        country: 'xind',

    },
    {
        img: 'img/need.webp',
        title: 'xorlangan moykachi',
        year: 2016,
        turi: 'jangari',
        desc: 'Need for spped tezlik xaqidagi kino',
        country: 'Rossiya',

    },
    {
        img: 'img/chumoliodam.jpg',
        title: 'xorlangan moykachi',
        year: 2017,
        turi: 'sarguzashtli',
        desc: 'Chumoli odam',
        country: 'Uzbekistan',

    },
    {
        img: 'img/avatar.jpg',
        title: 'xorlangan moykachi',
        year: 2015,
        turi: 'multik',
        desc: 'kino detskicha umuman g\alati ishlangan',
        country: 'Amerika',

    },
    {
        img: 'img/farsaj.jpg',
        title: 'xorlangan moykachi',
        year: 2020,
        turi: 'jangari',
        desc: 'Poyga va tez yurar mashinalar xaqida',
        country: 'germany',

    },
    {
        img: 'img/deadpool.jpg',
        title: 'xorlangan moykachi',
        year: 2015,
        turi: 'sarguzashtli',
        desc: 'Qonli sahnalar bo\'lishi mumkun 16 yoshdan kichiklarga tavsiya qilinmaydi',
        country: 'Avstraliya',

    },
    {
        img: 'img/spiderman.jpeg',
        title: 'xorlangan moykachi',
        year: 2018,
        turi: 'multik',
        desc: 'O\'rgimchak odam yaxshi bola',
        country: 'Amerika',

    },
    {
        img: 'img/black panther.jpg',
        title: 'xorlangan moykachi',
        year: 2024,
        turi: 'hayotiy',
        desc: 'Qora pantera',
        country: 'xind',

    },
    {
        img: 'img/mars.jpg',
        title: 'jangari multfilm',
        year: 2024,
        desc: 'multfilm',
        turi: 'jangari',
        country: 'Avstraliya'
    },
    {
        img: 'img/minion.jpg',
        title: 'jangari multfilm',
        year: 2024,
        desc: 'multfilm',
        turi: 'melodramma',
        country: 'Amerika'
    },
    {
        img: 'img/mars.jpg',
        title: 'jangari multfilm',
        year: 2024,
        desc: 'multfilm',
        turi: 'multfilm',
        country: 'Avstraliya'
    },
    {
        img: 'img/black panther.jpg',
        title: 'jangari multfilm',
        year: 2024,
        desc: 'multfilm',
        turi: 'multfilm',
        country: 'Rossiya'
    },
    {
        img: 'img/minion.jpg',
        title: 'jangari multfilm',
        year: 2024,
        desc: 'multfilm',
        turi: 'multfilm',
        country: 'Rossiya'
    },
    {
        img: 'img/black panther.jpg',
        title: 'jangari multfilm',
        year: 2024,
        desc: 'multfilm',
        turi: 'melodramma',
        country: 'Rossiya'
    },
    {
        img: 'img/minion.jpg',
        title: 'jangari multfilm',
        year: 2024,
        desc: 'multfilm',
        turi: 'multfilm',
        country: 'Rossiya'
    },
    {
        img: 'img/black panther.jpg',
        title: 'jangari multfilm',
        year: 2024,
        desc: 'multfilm',
        turi: 'multik',
        country: 'Rossiya'
    },
    {
        img: 'img/mars.jpg',
        title: 'jangari multfilm',
        year: 2024,
        desc: 'multfilm',
        turi: 'melodramma',
        country: 'Avstraliya'
    },
    {
        img: 'img/minion.jpg',
        title: 'jangari multfilm',
        year: 2024,
        desc: 'multfilm',
        turi: 'multik',
        country: 'Avstraliya'
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

