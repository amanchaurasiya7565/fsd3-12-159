import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  console.log("Client ULR:", req.url);

  const product = [
    {
      name: "Iphone",
      price: 85000,
      qty: 2,
      discount: 15,
    },
    {
      name: "HP Laptop",
      price: 95000,
      qty: 1,
        discount: 25,
      },
    {
        name: "Headphone",
        price: 2000,
        qty: 1, 
        discount: 50,
     },
  ];
  res.end(JSON.stringify(product));
});

server.listen(3000, () => console.log("prg4 is running at 3000..."));