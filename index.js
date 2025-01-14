import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Database
import db from "./_db.js";

// Types
import { typeDefs } from "./schema.js";

const resolvers = {
    Query: {
        games() {
            return db.games;
        },
        game(_,args) {
            return db.games.find(game => game.id === args.id);
        },  
        reviews() {
            return db.reviews;
        },
        review(_,args) {
            return db.reviews.find(review => review.id === args.id);

        },
        authors() {
            return db.authors;
        },
        author(_,args) {
            return db.authors.find(author => author.id === args.id);
        }
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((review) => review.game_id === parent.id);
        }
    }
}

// Server setup
const server = new ApolloServer({
  typeDefs, // Definitions of different type of data
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server ready at port `,4000);
