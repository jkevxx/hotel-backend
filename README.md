TO GET STARTED

```sh
npm install
npm run dev
```

> it my be necessary install Sequelize separately

---

CREATE PROJECT STRUCTURE

```sh
sequelize init
or
npx sequelize-cli init
```

---

CREATE MODELS

```sh
sequelize model:generate --name NameUpperCamelCaseSingular --attributes field:integer,field:string,field:float

or

npx sequelize-cli model:generate --name NameUpperCamelCaseSingular --attributes firstName:string,lastName:string,email:string
to foreign keys use next convention Upper-CamelCase
FieldId

```

CREATE MIGRATIONS

```sh
sequelize migration:generate --name camelCase
```

UPLOAD MIGRATIONS

```sh
sequelize-cli db:migrate
or
npx sequelize-cli db:migrate
```

UNDOING MIGRATIONS

```sh
sequelize-cli db:migrate:undo

sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

sequelize-cli db:migrate:undo:all

```

---

CREATE SEEDERS

```sh
npx sequelize-cli seed:generate --name demo-user
```

RUNNING SEEDERS

```sh
npx sequelize-cli db:seed:all
```

UNDOING SEEDS

```sh
npx sequelize-cli db:seed:undo

npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

npx sequelize-cli db:seed:undo:all
```

---

> [Documentation Sequelize](https://sequelize.org/docs/v6/other-topics/migrations/)

> [Commands](https://github.com/sequelize/cli)
