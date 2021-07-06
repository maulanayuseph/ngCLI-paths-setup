const { writeFile } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();

const environment = argv.environment;
const isProduction = environment === 'production';

let targetPath = '';
if (environment === 'development') {
  targetPath = `./src/environments/environment.dev.ts`;
} else if (environment === 'production') {
  targetPath = `./src/environments/environment.prod.ts`;
} else {
  targetPath = `./src/environments/environment.ts`;
}

const environmentFileContent = `
export const environment = {
  environment: '${environment}',
  production: ${isProduction},
  apiKey: '${process.env.API_KEY}',
  anotherApiSecret: '${process.env.ANOTHER_API_SECRET}',
};
`;

writeFile(targetPath, environmentFileContent, (err: any) => {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});