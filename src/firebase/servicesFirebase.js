import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

/**
 * Guarda un documento en una colección o subcolección específica de Firestore.
 * @param {string} path - Ruta de la colección o subcolección (e.g., `documento/{docId}/listado_maestro`).
 * @param {Object} data - Datos a guardar en el documento.
 * @returns {Promise<string>} - ID del documento creado.
 */
export const saveDocument = async (path, data) => {
  try {
    console.log('Ruta de la colección:', path);
    console.log('Datos a guardar:', data);

    const collectionRef = collection(db, path);
    const docRef = await addDoc(collectionRef, data);
    console.log('Documento guardado con ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error al guardar el documento:', error);
    throw error;
  }
};