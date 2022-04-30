// kada krene skrol logo da se smanji na 80%, a kada se vrati top da bude 100%
// kada krene scroll navigacija da bude zlatna a slova crvena


window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 80) {
        document.getElementById("logo").style.maxWidth = "80%";
    } else {
        document.getElementById("logo").style.maxWidth = "90%";
    }

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 80) {
        document.getElementById("nd").style.backgroundColor = "#753146";
    } else {
        // document.getElementById("nd").style.backgroundColor = "#fefefe";
        document.getElementById("nd").style.backgroundColor = "transparent";
    }
}