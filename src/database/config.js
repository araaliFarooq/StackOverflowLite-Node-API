import mongoose from 'mongoose';
import config from '../config';

const { DATABASE_URL } = config;

const mongoDb = () => mongoose.connect(DATABASE_URL, { useNewUrlParser: true });

export default mongoDb;
