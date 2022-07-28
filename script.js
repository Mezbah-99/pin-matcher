//generating 4 digit code
var randomNumber = Math.ceil(Math.random() * 9001) + 999 ;
const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click',function (){
    const generateNumber = document.getElementById('generated-number').value = randomNumber
})


// All button click

buttons = document.getElementsByClassName('button')
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText
        const totalNum = document.getElementById('total-num')
        totalNum.value += buttonText
        if(buttonText == 'C'){
            totalNum.value = ''
        }
        if(buttonText == '<'){
            removeValue = totalNum.value
            totalNum.value = removeValue.slice(0,-2)
        }
    })
}
function name(){


}
// submit number
const submitNum = document.getElementById('submit-num')
submitNum.addEventListener('click',function(){
    const generateValue = document.getElementById('generated-number').value
    const matchValue = document.getElementById('total-num').value

        if(generateValue == matchValue){
            setTimeout(matchingElement,500)
                function matchingElement(){
                    document.getElementById('matching').style.display = 'block'
                    document.getElementById('notmatching').style.display = 'none'
                }
            
        }else{
            setTimeout(notMathingElement,500
            )

            function notMathingElement(){
                document.getElementById('notmatching').style.display = 'block'
                document.getElementById('matching').style.display = 'none'
            }
        }
    
    
})
    

