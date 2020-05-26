# developers-api

Developer registry, to know the programming languages ​​they know and their GitHub repository.

## Manual installation

1. Use the npm command to initialize the project.

```bash
npm init
```

2. Install project dependencies

```bash
npm install
```

3. In case of recreating the database.

```bash
npm run setup
```

4. Build the application.

```bash
npm run build

```

## Run in development mode

```bash
npm run dev

```

## Run production mode

```bash
#Build the application for browser support
npm run build

#Run the application
npm run start


```

## Installation by docker

Build the application image, "developer-restapi" is the name of the application you want to give it.

```bash
docker build -t developer-restapi-final .

```

Once the application is built, the application is run. You can assign the port you want.

```bash
docker run -it -p 4000:3000 developer-restapi-final

> developers-api@1.0.0 start /app
> node dist/index.js

Server on port 3000
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Note

This is a challenge project

## License

[MIT](https://choosealicense.com/licenses/mit/)
