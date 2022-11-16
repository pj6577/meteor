import { ApolloServer, gql } from "apollo-server";
import { Meteor } from 'meteor/meteor';
import { startGraphQLServer } from 'meteor/quave:graphql/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const log = error => console.error('GraphQL server error', error);


const typeDefs = gql `
  
  type Query {
      loggedUser:User
    }
  
  type User {
    _id: ID
    username: String
  }


`;

const resolvers = {
  Query: {
    async loggedUser(root, args, {userId}) {
      console.log(` loggedUser resolvers call  `)
      if (!{userId}) {
        console.log(`!userId `);
        return null;
      }
      return Meteor.users.findOne({userId});
    },
  },

};

const server = new ApolloServer({ typeDefs:[typeDefs], resolvers:[resolvers], log });


server.listen().then(({ url }) => {
  console.log(` 🚀  Running on  ${url}`);
})

// startGraphQLServer({ typeDefs, resolvers });