let div=document.createElement('div');
div.setAttribute('id','output');

function function1(callback){
    setTimeout(function(){
        document.getElementById('output').innerHTML += "1<br>";
        callback();
    },1000);
}
function function2(callback){
    setTimeout(function(){
        document.getElementById('output').innerHTML += "2<br>";
        callback();
    },1000);
}function function3(callback){
    setTimeout(function(){
        document.getElementById('output').innerHTML += "3<br>";
        callback();
    },1000);
}function function4(callback){
    setTimeout(function(){
        document.getElementById('output').innerHTML += "4<br>";
        callback();
    },1000);
}function function5(callback){
    setTimeout(function(){
        document.getElementById('output').innerHTML += "5<br>";
        callback();
    },1000);
}function function6(callback){
    setTimeout(function(){
        document.getElementById('output').innerHTML += "6<br>";
        callback();
    },1000);
}function function7(callback){
    setTimeout(function(){
        document.getElementById('output').innerHTML += "7<br>";
        callback();
    },1000);
}function function8(callback){
    setTimeout(function(){
        document.getElementById('output').innerHTML += "8<br>";
        callback();
    },1000);
}function function9(callback){
    setTimeout(function(){
        document.getElementById('output').innerHTML += "9<br>";
        callback();
    },1000);
}function function10(callback){
    setTimeout(function(){
        document.getElementById('output').innerHTML += "10<br>";
        callback();
    },1000);
}function function11(callback){
    setTimeout(function(){
        document.getElementById('output').innerHTML += "Happy Independence Day<br>";
        callback();
    },1000);
}

function10(function(){
    function9(function(){
        function8(function(){
            function7(function(){
                function6(function(){
                    function5(function(){
                        function4(function(){
                            function3(function(){
                                function2(function(){
                                    function1(function(){
                                        function11(function(){

                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

document.body.appendChild(div);