import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My Contacts API",
      version: "1.0.0",
      description: "API documentation for Contacts App"
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server"
      }
    ]
  },
  apis: ["./routes/*.js"], // Swagger will look for annotations in route files
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
