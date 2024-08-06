import { Express } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const setupSwagger = (app: Express) => {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Desafio 3 do Programa de Bolsas da Compass.UOL',
        version: '1.0.0',
        description:
          'Documentação da API do Desafio 3 do Programa de Bolsas da Compass.UOL',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Servidor local',
        },
      ],
      tags: [
        {
          name: 'Users',
          description: 'API endpoints for managing users',
        },
        {
          name: 'Events',
          description: 'API endpoints for managing events',
        },
      ],
    },
    apis: ['./src/routes/*.ts'], // Certifique-se de que este caminho está correto
  };

  const swaggerSpec = swaggerJSDoc(options);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
