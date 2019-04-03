import ApiBuilder from 'claudia-api-builder';

const api : any = new ApiBuilder();

api.get('/', () => 'Hello world');

api.get('/bye', () => 'Goodbye, my friend!')

export = api;