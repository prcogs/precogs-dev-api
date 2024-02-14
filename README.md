
## Getting Started

Start project with docker in locale

```bash
npm install

docker compose -f docker-compose.dev.yml up -d

docker compose -f docker-compose.dev.yml exec -it adonijs bash

npm run dev

docker compose -f docker-compose.dev.yml down --remove-orphans
```

