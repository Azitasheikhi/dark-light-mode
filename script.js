let $ = document
const switchElem = $.querySelector('.switch')

switchElem.addEventListener('click', function(){
    $.body.classList.toggle('dark')

    if($.body.className.includes('dark')){
        localStorage.setItem('theme','dark')
    }
    else{
        localStorage.setItem('theme','light')
    }
})

window.onload = function(){
    let localStorageTheme = localStorage.getItem('theme')

    if(localStorageTheme === 'dark'){
        $.body.classList.add('dark')
    }
}