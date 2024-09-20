"use client"

import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import React, { useState } from 'react';
import Invoice from './Invoice';
import { Modal } from 'antd';

const InvoicePdf = () => {

    const [invoiceData] = useState({
        invoiceNumber: "0001234",
        date: "5 de Enero del 2024",
        clientName: "Andrés Piraquive",
        clientNumber: "(55) 1234-5678",
        clientAddress: "Calle cualquiera 123, cualquier lugar",
        clientPaypalEmail: "clientemail@example.com",
        services: [
          { description: "Servicio 1", price: 12.34, quantity: 1 },
          { description: "Servicio 2", price: 12.34, quantity: 1 },
          { description: "Servicio 3", price: 12.34, quantity: 1 },
        ],
        total: 37.02,
        contact: {
          email: "grafismodigital@gmai.com",
          website: "www.grafismodigital.com",
        },
        payment: {
          bank: "Banco Ensigma",
          accountName: "Luriel Zanabria",
          accountNumber: "0123 4567 8901",
        },
      });

      const [showPdf, setShowPdf] = useState(false);

    return (
        <div>
            <h1 className='text-3xl font-bold mb-16'>view the pdf file</h1>
                
        <button onClick={()=> setShowPdf(true)}>show pdf</button>
        <Modal open={showPdf} onCancel={()=> setShowPdf(false)} footer={null} style={{  minWidth: "max-content",}} centered={true}>
        <PDFViewer width="600" height="800" style={{marginTop: "20px"}}>
            <Invoice data={invoiceData} />
        </PDFViewer>
        </Modal>
         
        </div>
    );
};

export default InvoicePdf;