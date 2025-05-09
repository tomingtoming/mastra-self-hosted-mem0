# mastra-self-hosted-mem0

## Introduction

This repository contains the code to set up a self-hosted Mem0 instance.
Mem0 is a tool that allows agents to store and later recall memories.

## Prerequisites

To set up and run this repository, you need the following tools:

- Git
- Docker and Docker Compose
- Node.js and npm

## Setup Guide

Follow these steps to set up this repository:

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/tomingtoming/mastra-self-hosted-mem0.git
    cd mastra-self-hosted-mem0
    ```

2.  **Configure Environment Variables**

    Copy the `.env.example` file to `.env` and configure the necessary environment variables.

    ```bash
    cp .env.example .env
    ```

    Open the `.env` file and set the following variables appropriately:

    ```ini
    GOOGLE_GENERATIVE_AI_API_KEY=your-key-here
    OPENAI_API_KEY=sk-proj-your-key-here
    ```

3.  **Start Docker Containers**

    Start the databases (Qdrant and Neo4j) used by Mem0 using Docker Compose.

    ```bash
    docker-compose up -d
    ```
    This command starts the containers in detached mode.

4.  **Start the MCP Server**

    Start the MCP server included in this repository.

    ```bash
    npm install
    npm run mcp
    ```
    `npm install` is only required for the first time setup.

5.  **Configure MCP Client**

    Connect to the running MCP server from your MCP client (e.g., VSCode extension).
    The connection URL is `http://localhost:4112/`.

    Add the following configuration to your client's configuration file (e.g., `.roo/mcp.json`):

    ```json
    {
      "mcpServers": {
        "mem0": {
          "url": "http://localhost:4112/"
        }
      }
    }
    ```
