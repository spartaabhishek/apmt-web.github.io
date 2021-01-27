window.onscroll = () => {
    if(window.scrollY !== 0) document.querySelector('.logo-img').style.width = "0%"
    else document.querySelector('.logo-img').style.width = "50%"
}