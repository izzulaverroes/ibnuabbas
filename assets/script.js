const burgerButton = document.querySelector('.burger input');
const burgerBody = document.querySelector('nav ul')

burgerButton.addEventListener('click',function(){
    burgerBody.classList.toggle('active')
    document.querySelector('.burger span:nth-child(2)').classList.toggle('x1')
    document.querySelector('.burger span:nth-child(3)').classList.toggle('x2')
    document.querySelector('.burger span:nth-child(4)').classList.toggle('x3')
})

document.addEventListener('click',function(e){
    if(!burgerBody.contains(e.target) && !burgerButton.contains(e.target)){
        burgerBody.classList.remove('active');
        document.querySelector('.burger span:nth-child(2)').classList.remove('x1')
        document.querySelector('.burger span:nth-child(3)').classList.remove('x2')
        document.querySelector('.burger span:nth-child(4)').classList.remove('x3')
    }
})