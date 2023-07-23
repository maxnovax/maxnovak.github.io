

let clickCounter = 0;
let allClicks = 1;
let cardsFound = 0;
const n = 30;
let dishes = [
    {
        name: "baba-ganoush.jpg",
        img:"resources/baba-ganoush.jpg",
        isHidden: true,
 
    }, 
    {
        name: "dolma",
        img:"resources/dolma.jpg",
        isHidden: true, 
 
    }, 

    {
        name: "falafel",
        img:"resources/falafel.jpg",
        isHidden: true, 
 
    }, 
    {
        name: "fatayer",
        img:"resources/fatayer.png",
        isHidden: true, 
 
    }, 
    {
        name: "fattoush",
        img:"resources/fattoush.jpg",
        isHidden: true, 
 
    }, 
    {
        name: "harira",
        img:"resources/harira.jpg",
        isHidden: true, 
 
    }, 
    {
        name: "hummus",
        img:"resources/hummus.jpg",
        isHidden: true, 
 
    }, 
    {
        name: "kibbeh",
        img:"resources/kibbeh.jpeg",
        isHidden: true, 
 
    }, 
    {
        name: "kofta",
        img:"resources/kofta.jpg",
        isHidden: true, 
 
    }, 
    {
        name: "kunafa",
        img:"resources/kunafa.jpg",
        isHidden: true, 
 
    }, 
    {
        name: "manakeesh",
        img:"resources/manakeesh.jpg",
        isHidden: true, 
 
    },

    {
        name: "maqluba.jpg",
        img:"resources/maqluba.jpg",
        isHidden: true, 
 
    },
    {
        name: "sambousek",
        img:"resources/sambousek.jpg",
        isHidden: true, 
 
    },
    {
        name: "shishkebab.jpg",
        img:"resources/shishkebab.jpg",
        isHidden: true, 
 
    },
    {
        name: "tabouleh",
        img:"resources/tabouleh.jpg",
        isHidden: true, 
 
    }
]

let onCards = dishes;



const randomize = () =>{
    //Choose 8 from all 
    while (onCards.length >n ){
        let random = Math.floor(Math.random()* onCards.length);
        onCards.splice(random, 1);
    }
    //Double each
    for(let i = 0; i<n/2; i++){
        if (!appearedTwice(onCards, onCards[i]))
        {
            onCards.push({...onCards[i]});
        }
    }
    // Shuffle them
    onCards.sort(() => Math.random() - 0.5);
}


const hideAll =() =>{
    document.querySelectorAll('.image').forEach(item =>{
        if (item.found !== true){
            item.style.opacity = "0";
            item.isHidden = true;
}});
        onCards.forEach(elem =>{
        elem.isHidden = true;
    })
}
        


const appearedTwice = (arr, elemInArr)=>{
    const counter = arr.filter(element => element === elemInArr).length;
    if (counter === 2) {
        return true;
    } else return false;
}




randomize();
console.log(onCards);
hideAll();

// Copy images from array to cards
for(let i=1; i<=n; i++){
    document.getElementById(i).src = onCards[i-1].img;
    dishes[i-1].id = i;
}


document.querySelectorAll('.image').forEach(item =>{
    item.addEventListener('click', () =>{
        if(item.isHidden){
            item.style.opacity = "1";
        } else {
            item.style.opacity = "0";
        }
        clickCounter++;
        document.getElementById('click').innerHTML = allClicks;
        allClicks++;
        checkTwo();
        if(clickCounter>2){
            hideAll();
            clickCounter = 0;  
        }
        if(cardsFound === n){
            alert("Wygrałeś/aś!!!");
        }
    });
});






function checkTwo(){
    let opened =[];
    for(let i=1; i<=n; i++){
        if(document.getElementById([i]).style.opacity === "1" && document.getElementById([i]).found !== true){
            if(clickCounter<3){
                onCards[i-1].isHidden = false;
                opened.push(onCards[i-1]);
            } else{
                hideAll();
            }
        }
    }
    if(opened.length === 2 && opened[0].name === opened[1].name){
        document.getElementById(opened[0].id).found = true;
        document.getElementById(opened[1].id).found = true;
        cardsFound +=2;
        console.log(opened[0].name);
        console.log(opened[1].name);
    }
    
}








