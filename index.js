

//A.1
function adjacentElementsProduct(inputArray){    
    let longerlength = 0;
    let i = 0;
    let j = 0;
    let max = 0;
    for (i ; i <= inputArray.length - 1; i++) {
       if (inputArray[i] * inputArray[i+1]  > max) {
         max =   inputArray[i] * inputArray[i+1]; 
       }
    }
    return max;
 }
// let inputArray =  [2, 3, -5, -2, 4];
// console.log(adjacentElementsProduct(inputArray));
//A.2
function alternatingSums(inputArray){
    let rtn =[];
    rtn[0] = 0;
    rtn[1] = 0;
    let i = 0;
    for ( i; i <= inputArray.length - 1; i++) {
        //console.log(i % 2);
        if (i % 2 == 0) 
            rtn[0] += inputArray[i];  	
        else 
            rtn[1] += inputArray[i];
    }
    return rtn;
}

// let weigth = [60, 40, 55, 75, 64] ;
// let rtn2 =[];
//  rtn2 = alternatingSums(weigth);
// console.log(rtn2);
//B
function submit () {
    const url = "https://api.shrtco.de/v2/";
    const data = {
        'url' : document.getElementById('link').value
    };
    const params = {
        headers : { "content-type" : "application/json; charset=UTF-8" },
        body : data,
        method : "POST",
        mode : "cors"
    };

    fetch(url, params)
        .then(function(response) {
            if (response.ok) {
                //alert(response.json());
            } 
        }).then(function(data) {
            document.getElementById("result").innerHTML = data.result.short_link;
        }).catch(function(error) {
            //document.getElementById("message").innerHTML = error.message;
        });
    return false;
}