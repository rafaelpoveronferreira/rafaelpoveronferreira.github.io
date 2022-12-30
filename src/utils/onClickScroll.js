import disableScroll from "./disableScroll"

function onClickScroll(posx, posy) {
    disableScroll.off()
    scrollTo(posx, posy)
    setTimeout(()=>disableScroll.on(),500)
    }

export default onClickScroll