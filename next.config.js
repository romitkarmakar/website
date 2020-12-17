module.exports = {
    async redirects() {
      return [
        {
          source: '/old',
          destination: '/index.html',
          permanent: true,
        },
      ]
    },
  }