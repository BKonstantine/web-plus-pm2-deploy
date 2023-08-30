require('dotenv').config({ path: './.env.frontend' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'frontend',
  }],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'https://github.com/BKonstantine/web-plus-pm2-deploy.git',
      path: DEPLOY_PATH,
      'post-deploy': `cd ${DEPLOY_PATH}/frontend && npm i && npm run build && pm2 restart all`,
    },
  },
};
