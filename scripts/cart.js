

export const addToCard = ()=>{
    const addcard = document.getElementById("addcard")
  addcard.addEventListener("click",()=>{
    const cart = document.getElementById("cart")
    window.localStorage.setItem("name",data[x].name)
        const li = document.createElement("li")
        li.textContent= data[x].name 
        card.appenChild(li)
        
    })
}