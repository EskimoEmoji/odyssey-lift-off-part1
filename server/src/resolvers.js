const resolvers = {
  Query: {
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (parent, args, { dataSources }, info) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // Get a single track by id
    track: (parent, { id }, { dataSources }, info) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Mutation: {
    // Increment a tracks numberOfViews property
    incrementTrackViews: async (parent, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        };
      }
    },
  },
  Track: {
    author: ({ authorId }, __, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
