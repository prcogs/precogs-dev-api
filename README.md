
## Getting Started

Start project with docker in locale

```bash
npm install

docker compose up -d

docker compose exec -it adonijs bash

npm run dev

docker compose down --remove-orphans
```

OR

```bash
npm install

docker run --rm -it -v $PWD:/data --name precogs-dev-api -w /data -p 3333:3333 node:21 bash

npm run dev
```


