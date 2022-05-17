const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks for homepage grid"
    tracksForHome: [Track!]
    track(id: ID!): Track
  }

  "Mutation"
  type Mutation {
    incrementTrackViews(id: ID!): incrementTrackViewsResponse!
  }

  type incrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indates whether the mutation was successful"
    success: Boolean!
    "Human readable message for the UI"
    message: String!
    "Newly updated track after successful mutation"
    track: Track
  }

  "A track is a group of modules that teaches about a specific topic"
  type Track {
    id: ID!
    "Tracks Title"
    title: String!
    "Tracks main Author"
    author: Author!
    "Main display image"
    thumbnail: String
    "Approximate lenght to complete in minutes"
    length: Int
    "Number of modules this track contains"
    modulesCount: Int
    "Tracks complatete description"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    modules: [Module!]!
  }

  "A module is a single unit of teaching. Multiple modules compose a track"
  type Module {
    id: ID!
    title: String!
    length: Int
  }

  "Author of complete track"
  type Author {
    id: ID!
    "First last name"
    name: String!
    "Authors Pic"
    photo: String
  }
`;

module.exports = typeDefs;
