const wrapper = document.querySelector(".sliderWrapper") 
const menuItems = document.querySelector(".menuItem")

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        console.log("you cliked!");
    });
});