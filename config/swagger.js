import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Contacts & Businesses API",
      version: "1.0.0",
      description: "API documentation for Contacts and Businesses",
    },
    servers: [
      {
        url: "https://project1-0pl3.onrender.com",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js"], // Look at all route files
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
