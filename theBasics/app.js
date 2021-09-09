const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html"); //Pour dire que la reponse du serveur contient du code Html
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write("<html>");
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write("</html>");
        return res.end();
    } else if (url === "/message" && method === "POST") {
        let body = [];
        let message = "";
        req.on("data", (chunk) =>{ //Ecouter le buffer qui contient les donnees sous une forme speciale
            body.push(chunk);
            console.log(body);
        });
        req.on("end", () => {
            const convertBody = Buffer.concat(body).toString(); //Convertis les donnees du buffer apres fermerture du buffer.
            message = convertBody.split("=")[1];
            console.log(message);
            fs.writeFileSync("message.txt", message);
        });
        res.statusCode = 302;
        res.setHeader("Location", "/"); //Utilisez pour les redirections, nom de route ensuite la route a associe au nom.
        return res.end();
    }
    res.write("<html>");
    res.write("<head><title>My first response</title></head>");
    res.write("<body><h1>Hello form my nodejs server</h1></body>");
    res.write("</html>");
    res.end(); //Definir la fin de la réponse, les instructions apres ne seront pas traite ou ne seront pas renvoye au client.
});
server.listen(3000);