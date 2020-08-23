function getServerTime() {
    let xmlHttp;
    try {
        xmlHttp = new XMLHttpRequest();
    } catch (err1) {
        try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (err2) {
            try {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (err3) {
                alert("AJAX not supported");
            }
        }
    }
    xmlHttp.open('HEAD', window.location.href.toString(), false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send('');
    const serverTime = xmlHttp.getResponseHeader("Date");
    return new Date(serverTime);
}