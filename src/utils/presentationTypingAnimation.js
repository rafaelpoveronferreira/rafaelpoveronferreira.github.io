const presentationTypingAnimation = (timerId) => {
    if (timerId) {
        document.querySelector('#presentation-subheader').innerHTML = 'desenvolvedor'
        clearInterval(timerId)
        return null
    }
    
    var toggle = true;
    var charCount = 0;
    var arrayCount =0
    var textContent = document.querySelector('#presentation-subheader').textContent
    const text=[
        ' web    ',
        ' react.JS    ',
        ' frontend    ',
        ' node.JS    ',
        ' backend    ',
        ' fullstack    ',
    ]

    const newTimerId = setInterval(()=>{
        if(!text[arrayCount].charAt(charCount)) {
            
            let str = document.querySelector('#presentation-subheader').innerHTML
            str = str.substring(0, str.length - 1)
            document.querySelector('#presentation-subheader').innerHTML = str; 

            if(document.querySelector('#presentation-subheader').innerHTML == 'desenvolvedor') {
                charCount = 0
                text[arrayCount+1]?arrayCount++:arrayCount=0;
            }
        } else {
            if(toggle) {
                document.querySelector('#presentation-subheader').innerHTML+=text[arrayCount].charAt(charCount)
                charCount++
            }
            toggle = !toggle
        }
        
    },90)

    return newTimerId
}

export default presentationTypingAnimation