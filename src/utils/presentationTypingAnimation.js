const presentationTypingAnimation = (timerId) => {
    if (timerId) {
        document.querySelector('#animated-subheader').innerHTML = 'r'
        clearInterval(timerId)
        return null
    }
    
    var toggle = true;
    var charCount = 0;
    var arrayCount =0
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
            
            let str = document.querySelector('#animated-subheader').innerHTML
            str = str.substring(0, str.length - 1)
            document.querySelector('#animated-subheader').innerHTML = str; 

            if(document.querySelector('#animated-subheader').innerHTML == 'r') {
                charCount = 0
                text[arrayCount+1]?arrayCount++:arrayCount=0;
            }
        } else {
            if(toggle) {
                document.querySelector('#animated-subheader').innerHTML+=text[arrayCount].charAt(charCount)
                charCount++
            }
            toggle = !toggle
        }
        
    },90)

    return newTimerId
}

export default presentationTypingAnimation