import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  updateDoc,
  doc,
  orderBy
} from "firebase/firestore";
import { db } from "../firebase";

const todosRef = collection(db, "todos");

export const addTodo = async (todo) => {
  await addDoc(todosRef, todo);
};

export const getUserTodos = async (uid) => {
  const q = query(
    todosRef,
    where("uid", "==", uid),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const deleteTodo = async (id) => {
  await deleteDoc(doc(db, "todos", id));
};

export const updateTodo = async (id, data) => {
  await updateDoc(doc(db, "todos", id), data);
};
