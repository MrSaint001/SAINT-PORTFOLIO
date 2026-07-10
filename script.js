function sharePortfolio(){

navigator.share({

title: "SAINT - Game Developer Portfolio",

text: "Check out my game developer portfolio!",

url: window.location.href

});

}
function sharePortfolio(){

    if (navigator.share) {

        navigator.share({
            title: "SAINT - Game Developer Portfolio",
            text: "Check out my game developer portfolio!",
            url: window.location.href
        })
        .catch(error => console.log(error));

    } else {

        navigator.clipboard.writeText(window.location.href);

        alert("Portfolio link copied!");

    }

}