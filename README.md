# **GraphQL**

A brief summary of the GraphQL concepts I’ve explored:

### **1. Schema and Types**  
Defines API structure using `Query`, `Mutation`, and custom types.  
```graphql
    type Game {
        id: ID!,
        title: String!,
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!,
        rating: Int!,
        content: String!,
        game: Game!,
        author: Author!
    }
    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!,
        reviews: [Review!]
    }
```

### **2. Resolver Functions**  
Fetches data for schema fields.  
```javascript
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
  }
```

### **3. Query Variables**  
Enable dynamic queries.  
```graphql
query GamesQuery($id: ID!) {
game(id: $id) {
  title,
  platform,
  reviews {
    content,
    rating
  }
}}
```

### **4. Related Data**  
Fetch nested relationships.  
```graphql
    type Game {
        reviews: [Review!]
    }
```

### **5. Mutations**  
Perform data operations like add, update, or delete.  
```graphql
mutation AddMutation($game: AddGameInput!) {
  addGame(game: $game) {
    id,
    title,
    platform
  }
}
```
