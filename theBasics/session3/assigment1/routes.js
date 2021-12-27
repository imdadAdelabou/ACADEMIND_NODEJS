const handleRequest = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write("<html>");
        res.write('<body><p>Welcome to my amazing sample nodejs server by imdad Adelabou.</p> <br><form method="POST" action="/create-user"> <input type="text" name="username" /><button type="submit">Send username</button></form></body>');
        res.write("</html>");
        return res.end();
    }
    if (url === "/users") {
        res.write("<html>");
        res.write("<body> <ul><li>Imdad le boss</li> <li>Tony la terreur</li> <li>Moh le frais</li></ul></body>");
        res.write("</html>");
        return res.end();
    }
    if (url === "/create-user" && method === "POST") {
        let body = [];
        let username = "";
        req.on("data", (chunk) => {
            body.push(chunk);
            console.log(body);
        });
        req.on("end", () => {
            const convertBody = Buffer.concat(body).toString();
            username = convertBody.split("=")[1];
            console.log(username);
        });
        return res.end();
    }
};

module.exports = handleRequest;