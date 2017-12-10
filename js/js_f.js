
function loadContent() {
    //loadHeader();
    //loadCarousel();
    loadFooter();
    //loadIframe('#iframe1', 'zoryana.json');
    ////loadIframe('#iframe2', 'zoryana.json');
    //loadIframe('#iframe2', 'ira.json');
};


function loadFooter() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var footer = document.createElement("footer");
            footer.innerHTML = xhttp.responseText;
            footer.setAttribute("class", "page-footer");
            document.getElementsByTagName("body")[0].appendChild(footer);
        }
    };
    xhttp.open("GET", "footer.html", true);
    xhttp.send();
};

