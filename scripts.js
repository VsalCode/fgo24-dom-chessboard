const listBaris = ['div', 'div', 'div', 'div', 'div', 'div', 'div', 'div']
const listIsiBaris = ['div', 'div', 'div', 'div', 'div', 'div', 'div', 'div']

listBaris.forEach((item) => {
  const baris = document.createElement(item)
  baris.classList.add('baris')
  
  listIsiBaris.forEach((item) => {
    const kotak = document.createElement(item)
    baris.prepend(kotak)
  })
  document.body.prepend(baris)


})

