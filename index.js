import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Types
import { typeDefs } from "./schema.js";

// Server setup
const server = new ApolloServer({
  typeDefs, // Definitions of different type of data
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server ready at port `,4000);
