import { createTool } from "@mastra/core";
import { z } from "zod";
import { mem0 } from "../integrations";

export const mem0RememberTool = createTool({
    id: "mem0Remember",
    description:
        "Mem0-memorizeツールを使用して以前に保存したエージェントの記憶を思い出します。",
    inputSchema: z.object({
        question: z
            .string()
            .describe("保存された記憶の中から答えを探すために使用される質問。"),
    }),
    outputSchema: z.object({
        answer: z.string().describe("思い出された答え"),
    }),
    execute: async ({ context }) => {
        console.log(`Searching memory "${context.question}"`);
        const memory = await mem0.search(context.question, { userId: "default" });
        console.log(`\nFound memory "${JSON.stringify(memory)}"\n`);

        return {
            answer: JSON.stringify(memory.results),
        };
    },
});

export const mem0MemorizeTool = createTool({
    id: "mem0Memorize",
    description:
        "Mem0に情報を保存し、後でMem0-rememberツールを使用して思い出せるようにします。",
    inputSchema: z.object({
        statement: z.string().describe("メモリに保存する文"),
    }),
    execute: async ({ context }) => {
        console.log(`\nCreating memory "${context.statement}"\n`);
        // レイテンシーを減らすために、メモリはツールの実行をブロックせずに非同期で保存できます
        void mem0.add(context.statement, { userId: "default" }).then(() => {
            console.log(`\nMemory "${context.statement}" saved.\n`);
        });
        return { success: true };
    },
});
