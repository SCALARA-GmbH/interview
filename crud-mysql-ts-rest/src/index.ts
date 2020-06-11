import { App } from './app';

async function main() {
  const app = new App(5000);
  await app.listen();
}

main()
  .then(() => console.log('running'))
  .catch((e) => {
    process.exit(1);
    console.error(e);
  });
