import { Meteor } from 'meteor/meteor';
import { startGraphQLServer } from 'meteor/quave:graphql/server';

const log = error => console.error('GraphQL server error', error);

const UserNmae = `
    type Query {
        loggedUser : user
    }
    type User {
        _id : ID!
        username : String
    }
`;
const UserResolvers = {
    Query :{
        async loggedUser(root, args, {userId}){
            if(!userId){
                return null;
            }
            return Meteor.user.findOne(userId);
        },
    },
};

startGraphQLServer({typeDefs : [UserSchema], resolvers : [UserResolvers], log});