const resizeListener = ()=> window.addEventListener('resize',() => {
    const url = window.location.hash
    switch(url) {
        case '' || '#home':
            window.scrollTo(0,0)
            break;
        case '#projects':
            window.scrollTo(0,window.innerHeight)
            break;
        case '#contact':
            console.log(0,window.innerHeight*2)
            window.scrollTo(0,window.innerHeight*2)
            break;
        default:
            break;
    }
})

export default resizeListener