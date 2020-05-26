import app from "./app";

import { config } from "./libs/config";

async function main() {
  await app.listen(config.port);
  console.log(`Server on port ${config.port}`);
}

main();
