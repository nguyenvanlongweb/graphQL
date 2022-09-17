import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

import schema from './schema/schema';
import db from './config/db';

dotenv.config();
// clear console
console.clear();

const port = process.env.PORT || 3000;

db.connect();

const root = {
  hello: () => 'Hello world',
};

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Now browse to localhost:${port}/graphql`);
});
