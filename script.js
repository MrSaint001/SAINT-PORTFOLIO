function sharePortfolio(){

navigator.share({

title: "SAINT - Game Developer Portfolio",

text: "Check out my game developer portfolio!",

url: window.location.href

});

}
function sharePortfolio(){

    if(navigator.share){

        navigator.share({

            title: "SAINT - Game Developer Portfolio",

            text: "Check out my game developer portfolio!",

            url: window.location.href

        });

    } else {

        alert("Copy my portfolio link and share it!");

    }

}