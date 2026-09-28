# moroai 01

A Node.js + Express web application.

## Structure

- `core/`       - Server entry point, module loader
- `modules/`    - Installable feature modules
- `agents/`     - AI agents
- `tools/`      - Tools agents can call
- `providers/`  - AI provider adapters (OpenAI, Anthropic, etc.)
- `knowledge/`  - Project knowledge base and decisions
- `workflows/`  - Pipelines and execution engine
- `ui/`         - Frontend (future)
- `security/`   - Auth and permissions
- `settings/`   - Configuration

## Run

```
npm install
npm run dev
```
