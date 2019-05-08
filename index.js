const Server = require("cloud-boot");
const router = require("./src/router");

let server = new Server();
server.use(router.routes());
server.on('started', () => {
});
server.startup();