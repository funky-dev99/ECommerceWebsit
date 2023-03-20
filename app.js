const wrapper = document.querySelector(".sliderWrapper") 
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "Hoodies",
      price: 110,
      colors: [
        {
          code: "white",
          img:"./image/hoodie.png",
        },
        {
          code: "black",
          img: "./image/hoodie1.png",
        },
      ],
    },
    {
      id: 2,
      title: "Blouse",
      price: 100,
      colors: [
        {
          code: "yellow",
          img: "./image/blouse1.png",
        },
        {
          code: "red",
          img: "./image/blouse.png",
        },
      ],
    },
    {
      id: 3,
      title: "Jeans",
      price: 220,
      colors: [
        {
          code: "black",
          img: "./image/jeans.png",
        },
        {
          code: "blue",
          img: "./image/jeans1.png",
        },
      ],
    },
    {
      id: 4,
      title: "Skirt",
      price: 145,
      colors: [
        {
          code: "black",
          img: "./image/skirt.png",
        },
        {
          code: "white",
          img: "./image/skirt1.png",
        },
      ],
    },
    {
      id: 5,
      title: "T-Shirt",
      price: 110,
      colors: [
        {
          code: "red",
          img: "./image/tshirt1.png",
        },
        {
          code: "black",
          img: "./image/tshirt.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0]

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;


        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });

    });
});


currentProductColors.forEach((color,index)=>{
  color.addEventListener("click", ()=>{
    currentProductImg.src = choosenProduct.colors[index].img
  });  
});

currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor="white";
      size.style.color="black";
    });
    size.style.backgroundColor="black";
    size.style.color="white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});