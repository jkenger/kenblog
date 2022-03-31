var myLink = document.querySelector('ul.links')
  myLink.addEventListener('click', (e)=>{
    console.log('clicked: ', e.target)
    e.preventDefault()
    window.location.href = `http://localhost:3000/theblog/?filter=${e.target.textContent.replace(/ +/g, "").toLowerCase()}`

})