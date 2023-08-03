var themechange = document.getElementById("themechange")

themechange.addEventListener("click", function(){
    var body = document.getElementById("body")
    var container = document.getElementById("container")
    var btn = document.getElementsByClassName("btn")

    body.style.backgroundColor = "white"
    container.style.backgroundColor = "rgb(8, 8, 70)"

    btn.forEach(element => {
        btn.style.backgroundColor = "white"
        btn.style.color = "rgb(8, 8, 70)"
    });
})


var switchTheme = document.getElementById("switch")

switchTheme.addEventListener("click", function(){
    var body = document.getElementById("body")
    var container = document.getElementById("container")
    var btn = document.getElementsByClassName("btn")

    body.style.backgroundColor = "rgb(8, 8, 70)"
    container.style.backgroundColor = "white"

    btn.forEach(element => {
        btn.style.backgroundColor = "rgb(8, 8, 70)"
        btn.style.color = "white"
    })
})


function whriteValue(param){
    var input = document.getElementById("input")
    var newInput = input.value + param
    input.value = newInput;
}

var calc = document.getElementById("calc")

calc.addEventListener("click", function(){
    var input = document.getElementById("input")

    var result = eval(input.value)
    var answer = document.getElementById("answer")
    answer.innerHTML = (input.value + " = " + result)
})

var deleteValues =document.getElementById("delete")

deleteValues.addEventListener("click", function(){
    document.getElementById("input").value = ""
})



function addNumber(symbol){
    let result = document.getElementById("negative").value;
    if(result === "") {
        return;
    }
    if(result.includes("-")){
        result = result.replace("-", "");
    }else{
        result = "-" + result;
    }
    document.getElementById("negative").value = result;
}


function convertToPercentage() {
    let result = document.getElementById("percen").value;
    if(result === "") {
        return;
    }
    if (!isNaN(result)) {
        result = parseFloat(result) / 100;
        document.getElementById("percen").value = result
    }
}



var deleteValues =document.getElementById("delete-1")

deleteValues.addEventListener("click", function(){
    let result = document.getElementById("input").value;
    result = input.value.slice(0, -1);
    document.getElementById("input").value = result;
})