import { useState } from 'react';
import './App.scss';
import PDFFile from './PDFFile/PDFFile';
import { pdf } from '@react-pdf/renderer';
import { getDoc, doc } from 'firebase/firestore';
import db from '../server/firebase/firebase'; 
function App() {
  const [docId, setDocId] = useState("");
  const [name, setName] = useState("");

  const generatePdfDocument = async (e) => {
    e.preventDefault();
    const documentRef = doc(db, 'certificates', docId);

    try {
      const docSnap = await getDoc(documentRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setName(data.name);
        const blob = await pdf(<PDFFile name={name} />).toBlob();
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      } else {
        alert("Certificate with the provided ID not found.");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  return (
    <div className='Page'>
      <header className='header'>
        <p>Get your Certificate</p>
        <h2>Download here</h2>
      </header>
      <main className='main'>
        <form className='form' onSubmit={generatePdfDocument}>
          <input type="text" name="docId" placeholder='Enter Document ID' onChange={(e) => setDocId(e.target.value)} value={docId} />
          <input type="submit" value="Get" />
        </form>
      </main>
    </div>
  )
}

export default App;
