module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
  serverRuntimeConfig: {
    dbConfig: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'minoru'
    },
    secret: '123456789'
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api' // development api
      : 'http://localhost:3000/api' // production api
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          // fixes proxy-agent dependencies
          "pg-hstore": false,
          fs: false,
          net: false,
          dns: false,
          tls: false,
          assert: false,
          // fixes sentry dependencies
          process: false
        }
      };
    }
    return config
  }
}