/*

Our main database driver is mongo db which is a non relational database
mongoDB and mongoose save data inform of docs and hence no migrations
needed to interact with the db
// All new database models shall be defined in the schema folder and if u
may need to add any configurations add them to the config.js
https://mongoosejs.com/docs/guide.html
*/

import monogoDB from './config';
import * as models from './shemas';

export default monogoDB;

export { models };
