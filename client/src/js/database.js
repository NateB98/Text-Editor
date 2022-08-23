import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
    const editorDb = await openDB('jate', 1);
    const transactVar = editorDb.transaction('jate', 'readwrite');
    const store = transactVar.objectStore('jate');
    const req = store.put({ id: 1, value: content });

    const res = await req;
    console.log('Saved data', res.value)
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
    const editorDb = await openDB('jate', 'readonly');
    const store = transactVar.objectStore('jate');
    const req = store.get(1);
    const res = await req;
    res
    ? console.log('Data gathered from db', res.value)
    : console.log('Data not found')
}

initdb();