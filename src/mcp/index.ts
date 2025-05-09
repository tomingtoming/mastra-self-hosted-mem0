import http from "http";
import { MCPServer } from "@mastra/mcp";
import { mem0MemorizeTool, mem0RememberTool} from "../mastra/tools"

const mcpPort = 4112;

const server = new MCPServer({
  name: "LifeSupport",
  version: "1.0.0",
  tools: { mem0MemorizeTool, mem0RememberTool },
});

const httpServer = http.createServer(async (req, res) => {
  await server.startSSE({
    url: new URL(req.url || "", `http://localhost:${mcpPort}`),
    ssePath: "/",
    messagePath: "/message",
    req,
    res,
  });
});

httpServer.listen(mcpPort, () => {
  console.log(`HTTP server listening on port ${mcpPort}`);
});
