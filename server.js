const express = require("express");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.get("/Home", (req, res) => {
    app.render(req, res, "/");
  });
  
  server.get("/aboutus", (req, res) => {
    app.render(req, res, "/About");
  });
  server.get("/pricing", (req, res) => {
    app.render(req, res, "/Pricing");
  });
  server.get("/feature", (req, res) => {
    app.render(req, res, "/Feature");
  });
  server.get("/work", (req, res) => {
    app.render(req, res, "/Work");
  });
  server.get("/casestudies", (req, res) => {
    app.render(req, res, "/CaseStudies");
  });
  server.get("/blog", (req, res) => {
    app.render(req, res, "/Blog");
  });
  server.get("/readblog", (req, res) => {
    app.render(req, res, "/ReadBlog");
  });
  server.get("/contact", (req, res) => {
    app.render(req, res, "/Contact");
  });
  server.get("/privacy", (req, res) => {
    app.render(req, res, "/Privacy");
  });
  server.all("*", (req, res) => {
    return handle (req, res, "/");
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});