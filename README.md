# **GraphQL**

A brief summary of the GraphQL concepts I’ve explored:

### **1. Schema and Types**  
Defines API structure using `Query`, `Mutation`, and custom types.  
```graphql
type Game {
  id: ID!
  name: String!
  genre: String
}
```

### **2. Resolver Functions**  
Fetches data for schema fields.  
```javascript
Query: {
  game: (_, args) => db.games.find((g) => g.id === args.id),
}
```

### **3. Query Variables**  
Enable dynamic queries.  
```graphql
query GetGame($id: ID!) {
  game(id: $id) {
    name
  }
}
```

### **4. Related Data**  
Fetch nested relationships.  
```graphql
type Game {
  developer: Developer
}
```

### **5. Mutations**  
Perform data operations like add, update, or delete.  
```graphql
mutation AddGame($game: GameInput!) {
  addGame(game: $game) {
    id
    name
  }
}
```

Simple, flexible, and powerful—this is GraphQL! 🚀
