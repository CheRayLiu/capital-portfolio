export const getAPIUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://capital-portfolio-api.vercel.app';
