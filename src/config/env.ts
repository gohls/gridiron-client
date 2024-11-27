const env = {
  API_BASE_URL:
    import.meta.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000/api/',
  AUTH_HEADER_PREFIX: import.meta.env.AUTH_HEADER_PREFIX || 'token',
  AUTH_SECRET_KEY: import.meta.env.AUTH_SECRET_KEY || 'your-secret-key',
  AUTH_TOKEN_KEY: import.meta.env.AUTH_TOKEN_KEY || 'authToken',
  SLEEPER_AVATARS_BASE_URL:
    import.meta.env.SLEEPER_AVATARS_BASE_URL ||
    'https://sleepercdn.com/avatars/',
};

export default env;
