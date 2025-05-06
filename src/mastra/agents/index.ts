import { google } from "@ai-sdk/google";
import { Agent } from "@mastra/core/agent";
import { mem0MemorizeTool, mem0RememberTool } from "../tools";

export const mem0agent = new Agent({
    name: "mem0agent",
    instructions: `
      You are a helpful AI. Answer the question based on query and memories.
      You must use mem0RememberTool before think about response, and you must use mem0MemorizeTool before you response.
    `,
    model: google("gemini-2.5-pro-exp-03-25"),
    tools: { mem0MemorizeTool, mem0RememberTool }
})
