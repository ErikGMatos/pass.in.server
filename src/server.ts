import fastify from "fastify";
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'
import fastifyCors from '@fastify/cors'

import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
import { createEvent } from "./routes/create-event";
import { registerForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";
import { getAttendeeBadge } from "./routes/get-attendee-badge";
import { CheckIn } from "./routes/check-in";
import { getEventAttendees } from "./routes/get-event-attendees";
import { errorHandler } from './error-handler';

const app = fastify();

app.register(fastifyCors, {
  origin: '*'
})

app.register(fastifySwagger, {
  swagger: {
    consumes: ['application/json'],
    produces: ['application/json'],
    info: {
      title: 'pass.in',
      description: 'Especificações da API para o back-end da aplicaçnao pass.in construída durante o NLW Unite da Rocketseat',
      version: '1.0.0'
    }
  },
  transform: jsonSchemaTransform
})

app.register(fastifySwaggerUI, {
  routePrefix: '/docs'
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAttendeeBadge)
app.register(CheckIn)
app.register(getEventAttendees)

app.setErrorHandler(errorHandler)

app.listen({ port:3333, host: '0.0.0.0' }).then(() => {
  console.log('Http server running')
})