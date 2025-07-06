import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { queryType, makeSchema } from "nexus";

const query = queryType({
  definition: (t) => {
    t.string("greeting", {
      resolve: () => "hello world",
    });
  },
});

const schema = makeSchema({ types: [query] });

const server = new ApolloServer({ schema });

const { url } = await startStandaloneServer(server, {
  listen: { port: 9000 },
});

console.log(`🚀 Server started at: ${url}`);
