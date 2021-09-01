function receivesAFunction(myCallbackFunc){
    myCallbackFunc()
}

function returnsANamedFunction(a){
    function myNamedFunction(b){
        return a + b
    }
    return myNamedFunction
}


function returnsAnAnonymousFunction(a){
    return function (b){
        return a + b
    }
}