import * as moduleAlias from 'module-alias';
import app from './app';
import config from './config/config';

const sourcePath = process.env.NODE_ENV === 'development' ? 'src' : 'build';
moduleAlias.addAliases({
  '@server': sourcePath,
  '@config': `${sourcePath}/config`,
  '@models': `${sourcePath}/modelss`,
  '@services': `${sourcePath}/services`,
  '@controllers': `${sourcePath}/controllers`,
  '@validations': `${sourcePath}/validations`,
  '@middlewares': `${sourcePath}/middlewares`,
});

const port = config.port || 5000;

app.listen(port, () => {
  console.info(`Listening to port ${port}`);
});
