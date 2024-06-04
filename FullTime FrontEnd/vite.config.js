export default {
  // Outras configurações
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
