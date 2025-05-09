import { QdrantClient } from "@qdrant/js-client-rest";
import { Memory } from "mem0ai/oss";

export const mem0 = new Memory({
    embedder: {
        // provider: "azure_openai",
        provider: "google",
        config: {
            model: "gemini-embedding-exp-03-07",
            // model: "text-embedding-004",
            apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
        }
    },
    vectorStore: {
        provider: "qdrant",
        config: {
            collectionName: "mem0",
            client: new QdrantClient({
                url: process.env.QDRANT_URL
            }),
            dimension: 768,
        }
    },
    llm: {
        // provider: "azure_openai",
        // provider: "google",
        provider: "openai",
        config: {
            // model: "gemini-2.5-pro-preview-05-06",
            // apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
            apiKey: process.env.OPENAI_API_KEY,
        }
    },
    enableGraph: true,
    graphStore: {
        provider: "neo4j",
        config: {
            url: process.env.NEO4J_URL || "",
            username: process.env.NEO4J_USERNAME || "",
            password: process.env.NEO4J_PASSWORD || "",
        },
        // llm: {
        //     provider: "openai",
        //     apiKey: process.env.OPENAI_API_KEY,
        //     config: {
        //         apiKey: process.env.OPENAI_API_KEY,
        //     }
        // }
    },
});
