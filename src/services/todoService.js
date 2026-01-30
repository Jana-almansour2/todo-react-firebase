import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const addTodo = async (userId, text) => {
  await addDoc(collection(db, "todos"), {
    userId,
    text,
    createdAt: new Date()
  });
};

export const getTodos = async (userId) => {
  const q = query(
    collection(db, "todos"),
    where("userId", "==", userId)
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};
