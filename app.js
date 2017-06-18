$.getJSON("http://api.smartnoob.de/ferien/v1/ferien/?bundesland=nw", feriendaten => {
    var html;
    feriendaten.daten.forEach(ferien => {
        html += "<tr><td>" + ferien.title + "</td><td>" + moment.unix(ferien.beginn).format("DD.MM.YYYY") + "</td><td>" + moment.unix(ferien.ende).format("DD.MM.YYYY") + "</td></tr>";
    });
    $("#app").html(html);
});