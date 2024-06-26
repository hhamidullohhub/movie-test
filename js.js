const ul = document.querySelector('.ul')
const header_ul = document.querySelector('.header_ul')

links.forEach((obj) => {
    const site_link = document.createElement('h1')
    const links_div = document.createElement('div')
    const links_li = document.createElement('li')
    const links_text = document.createElement('p')
    links_text.textContent = obj.name
    site_link.textContent = 'uzmovi.com'

    links_li.append(links_text)
    links_div.prepend(links_li)
    header_ul.append(links_div)
    links_div.classList.add('border')
    header_ul.classList.add('flex')
    links_text.classList.add('textsize')


})



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

    li.addEventListener('click', () => {

    });
})