//Holds All the list Item
let listItem=document.getElementsByClassName('li')
//Initial value is 1
let currentValue=1

//Add this event to all the list Item to take current value
function activeLink(){

    //when user click any link it Itereate the list Item and remove the previous style
    for(let l of listItem){
           l.classList.remove('active')
    }
    //once Previous style removed Add the style to Active List 
    event.target.classList.add('active')
    currentValue=event.target.value
}

//Event for Previous BTN
function Btn1(){
    //If the currentValue greater then 1, it remove the style from List item
    if(currentValue>1){
        for(let l of listItem){
            l.classList.remove('active')
        }
     
    //decrease one value by each click to traverse backword and add style to the LIST ITEM
     currentValue-- 
     listItem[currentValue-1].classList.add('active')
    


    }
}
// Event for Next BTN
function Btn2(){
    //If the currentValue less then 5, it remove the style from List item
    if(currentValue<5){
        for(let l of listItem){
            l.classList.remove('active')
        }
    //Increase one value by each click to traverse forward and add style to the LIST ITEM
     currentValue++
     listItem[currentValue-1].classList.add('active')
    


    }

}