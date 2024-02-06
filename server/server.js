import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const server = express();
const port = 5001;

// export to .env files before pushing to prod
const env = "development";
const debug_mode = true;

const is_dev = () => {
        return env === "development";
};

const is_debug_mode = () => {
        return env === "development" && debug_mode === true;
};

const debug = (...args) => {
        if (is_debug_mode()){
                for (let arg of args) {
                        console.log(`${arg}`);
                }
        }
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __static_dir = path.join(__dirname, "static");

debug(__filename, __dirname);

server.use(express.static(__dirname));

server.get("/", (request, response) => {
        response.sendFile(path.join(__static_dir, "index.html"));
});

server.get("/index", (request, response) => {
        response.sendFile(path.join(__static_dir, "index.html"));
});

server.listen(port, () => {
        console.log(`Server is listening on Port: ${port}`);
});
