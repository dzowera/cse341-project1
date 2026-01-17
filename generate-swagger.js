import fs from "fs";
import swaggerSpec from "./config/swagger.js";

const swaggerJson = JSON.stringify(swaggerSpec, null, 2);

fs.writeFileSync("swagger.json", swaggerJson);

console.log("✅ swagger.json has been generated successfully");
// End of file: generate-swagger.js