var JSSoup = require('jssoup').default;
const request = require('request');
let link = "https://soap2day.cc/TczoxNzoiOTU2fHwyNy40LjE0NS4xODEiOw.html"
request(link, function (error, response, body) {
    console.log('statusCode:', response && response.statusCode); 
    var soup = new JSSoup(body,false);
    let tag = soup.findAll("p")
    out = tag.find(element => element.attrs.id == "wrap")
    console.clear()
    console.log(out._text);
});





