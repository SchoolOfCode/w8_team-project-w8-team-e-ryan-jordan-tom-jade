if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  import { LOTR_API_KEY } from './prod.js';
} else {
  //we are in development - return the dev keys
  import { LOTR_API_KEY } from './dev.js';
}
