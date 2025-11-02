import { SQLite } from 'expo-sqlite';
const db = SQLite.openDatabase('music.db');
export default db;