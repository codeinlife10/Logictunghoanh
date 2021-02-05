const noName1 = (n) => {
    if(n == 1) return 0 
    if(n == 2) return 1  
    return noName1(n-1) + noName1(n-2)  
}

const noName2 = (n) => {
    if(n > 0) 
    return (2**n + 1) % 1000
}

const noName3 = (n) => {
    if(n > 0) 
    return (2**n + 1) % 1000
}

const noName4 = (n) => {
    if(n == 1 || n == 3) return 1
    if(n == 2 || n == 4) return 2 
    if(n % 2 == 0) return noName4(n-2) + noName4(n-4)
    if(n % 2 != 0) return noName4(n-1) + noName4(n-3)
}

const noName5 = (n) => {
    if(n % 2 != 0) return n 
    return noName5(n-1) + noName5(n+1)
}


// subject matter process
const arrayLogic = [noName1,noName2,noName3,noName4,noName5]
let result = []

for(let i = 1; i <= 5; i++) {
    let randomNumber = parseInt(Math.random()*5)
    let randomIndex = parseInt((Math.random()*30)+6) 
    let randomQuestion = parseInt(Math.random()*5)
    console.log(randomNumber);
    console.log(randomIndex); 
    let subjectMatter = arrayLogic[randomNumber]
    
    let tag = document.getElementsByClassName(`col${i}-contain`)
    for(let j = 0; j < 5; j++) {
        if(j == randomQuestion){ 
            result.push(subjectMatter(randomIndex+j))
            let html = `
            <div class="col col${i}">?</div>
            `
        tag[0].insertAdjacentHTML("beforeend",html)
        tag[1].insertAdjacentHTML("beforeend",html)
        continue
        }
        let html = `
        <div class="col col${i}">${subjectMatter(randomIndex+j)}</div>
        `
        tag[0].insertAdjacentHTML("beforeend",html)
        tag[1].insertAdjacentHTML("beforeend",html)
    }
   
}
//result process
let resultSubmit = document.getElementById("resultSubmit")
let annouce = document.getElementById("annouce")
resultSubmit.addEventListener("submit",(e) => {
    e.preventDefault()
    let dataSubmit = []
    let count = 0 
    dataSubmit.push(resultSubmit.red.value)
    dataSubmit.push(resultSubmit.yellow.value)
    dataSubmit.push(resultSubmit.green.value)
    dataSubmit.push(resultSubmit.blue.value)
    dataSubmit.push(resultSubmit.purple.value)
    console.log(dataSubmit);
    for(let i = 0; i< 5;i++) {
        if(dataSubmit[i] == result[i]) count++
    }
    if(count == 5) {
        annouce.innerText = "Chính xác 5/5!"
    }else {
        annouce.innerText = `Try Again?${count}/5`
    }
})