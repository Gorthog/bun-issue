import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const db = getFirestore(initializeApp());

const docRef = db.collection('test').doc('test');
const docSnap = await docRef.get();

if (docSnap.exists) {
  console.log(docSnap.data())
}
