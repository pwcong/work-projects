const IS_PROD = process.env.NODE_ENV === 'production';

const API_PREFIX = IS_PROD ? '/api/v1' : 'http://localhost:8080/api/v1';

const URL_PLAYER = IS_PROD ? '/player/index.html' : 'http://localhost:8080/player/index.html';

export default {
    API_PREFIX,
    URL_PLAYER
};