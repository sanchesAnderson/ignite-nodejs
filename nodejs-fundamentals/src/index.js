const { response, request } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/courses", (request, response) => {
    const queryRequest = request.query;
    console.log(queryRequest);
    return response.json(["Curso1", "Curso2", "Curso3"]);
});

app.post("/courses", (request, response) => {
    const bodyRequest = request.body;
    console.log(bodyRequest);
    return response.json(["Curso1", "Curso2", "Curso3", "Curso4"]);
});

app.put("/courses/:id", (request, response) => {
    const { id } = request.params;
    console.log(id);
    return response.json(["Curso1", "Curso2", "Curso3"]);
});

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso6", "Curso2", "Curso3", "Curso4"]);
});

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso6", "Curso2"]);
})

app.listen(3333);
