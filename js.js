const ul = document.querySelector('.ul')
const header_ul = document.querySelector('.header_ul')
const section1_ul = document.querySelector('section1_ul')
const links_div = document.createElement('div')




movies.forEach((movie) => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    const title = document.createElement('h3')
    const desc = document.createElement('p')


    img.src = movie.img
    img.setAttribute('width', '100%')
    img.setAttribute('height', '350px')
    title.textContent = movie.title
    desc.textContent = movie.desc
    li.classList.add('li')
    title.classList.add('h3')
    desc.classList.add('p')

    li.append(img, title, desc)
    ul.prepend(li)
})