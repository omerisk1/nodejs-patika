const http = require('http');
const port = 5000;
const server = http.createServer((req,res) => {
    const url = req.url;
    const pageName = url.substring(1,url.length)
    
    
    if(url === "/"){
        res.writeHead("200", {contentType:"text/html"});
        res.write(`<h2> index sayfasina hosgeldiniz. </h2>`)
    }
    else if (url === "/hakkimda"){
        res.writeHead("200", {contentType:"text/html"});
        res.write(`<h2> ${pageName} sayfasina hosgeldiniz.</h2>`)
    }
    else if (url === "/iletisim"){
        res.writeHead("200", {contentType:"text/html"});
        res.write(`<h2> ${pageName} sayfasina hosgeldiniz. </h2>`)
    }
    else {
        res.writeHead("404", {contentType:"text/html"});
        res.write("<h2>404 Not Found</h2>");
    }
    res.end();
})

server.listen(port, () => {
    console.log(`sunucu port ${port} de başlatıldı.`)
})

