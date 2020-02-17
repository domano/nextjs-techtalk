module.exports = {
    exportTrailingSlash: true,
    exportPathMap: async function() {
      const paths = {
        '/': { page: '/' },
        '/techtalk': { page: '/techtalk' }
      };
  
      return paths;
    }
  };