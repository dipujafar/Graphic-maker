"use client";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Helvetica",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/helveticaneue/v14/l18tZNZbLHpxqT2OfVgawSEBAQ.ttf",
      fontWeight: "normal",
    }, // Regular
    {
      src: "https://fonts.gstatic.com/s/helveticaneue/v14/l18uZNZbLHpxqT2OfVgawYlFBAxsg.ttf",
      fontWeight: "bold",
    }, // Bold
  ],
});

const Invoice = ({ data }: any) => {
  // Create styles for the PDF document
  const styles = StyleSheet.create({
    page: {
      padding: 40,
      fontFamily: "Helvetica",
    },
    logoContainer: {
      marginBottom: 10,
    },
    logo: {
      width: 100,
      height: 100,
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    headerText: {
      fontSize: 14,
      textAlign: "right",
    },
    title: {
      fontSize: 30,
      fontWeight: 700,
      textAlign: "right",
      color: "#333",
    },
    clientInfo: {
      marginBottom: 20,
      fontSize: 12,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 5,
    },
    textBold: {
      fontWeight: 800,
      fontSize: 14,
    },
    table: {
      //   display: 'table',
      width: "100%",
      marginBottom: 20,
    },
    tableRow: {
      flexDirection: "row",
    },
    tableCell: {
      flex: 1,
      padding: 5,
      borderBottom: "1px solid #ccc",
      fontSize: 12,
    },
    totalRow: {
      flexDirection: "row",
      justifyContent: "flex-end",
      marginTop: 10,
    },
    totalLabel: {
      fontSize: 12,
      fontWeight: "bold",
      marginRight: 10,
    },
    totalValue: {
      fontSize: 12,
      fontWeight: "bold",
      backgroundColor: "#f0f0f0",
      padding: 5,
    },
    contactInfo: {
      fontSize: 12,
      marginBottom: 20,
    },
    paymentInfo: {
      fontSize: 12,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    signature: {
      textAlign: "right",
      marginTop: 30,
      fontSize: 12,
    },
  });

  return (
    <Document>
      <Page style={styles.page}>
        {/* Logo and Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image src={`/logo.png`} style={styles.logo} />
          </View>
          <View>
            <Text style={styles.title}>FACTURA</Text>
            <Text style={styles.headerText}>
              Factura N° {data.invoiceNumber}
            </Text>
            <Text style={styles.headerText}>Fecha: {data.date}</Text>
          </View>
        </View>

        {/* Client Information */}
        <View style={styles.clientInfo}>
          <Text style={styles.sectionTitle}>INFORMACIÓN DEL CLIENTE</Text>
          <Text>
            <Text style={styles.textBold}>Nombre:</Text> {data.clientName}
          </Text>
          <Text>
            <Text style={styles.textBold}>Número:</Text> {data.clientNumber}
          </Text>
          <Text>
            <Text style={styles.textBold}>Dirección:</Text> {data.clientAddress}
          </Text>
          {/* <Text><Text style={styles.textBold}>PayPal Email:</Text> {data.clientPaypalEmail}</Text> */}
        </View>

        {/* Service Table */}
        <View style={styles.table}>
          <View
            style={[
              styles.tableRow,
              {
                backgroundColor: "black",
                color: "white",
                fontWeight: "extrabold",
              },
            ]}
          >
            <Text style={[styles.tableCell, styles.textBold]}>DESCRIPCIÓN</Text>
            <Text style={[styles.tableCell, styles.textBold]}>PRECIO</Text>
            <Text style={[styles.tableCell, styles.textBold]}>CANTIDAD</Text>
            <Text style={[styles.tableCell, styles.textBold]}>TOTAL</Text>
          </View>
          {data.services.map((service: any, index: any) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{service.description}</Text>
              <Text style={styles.tableCell}>${service.price.toFixed(2)}</Text>
              <Text style={styles.tableCell}>{service.quantity}</Text>
              <Text style={styles.tableCell}>
                ${(service.price * service.quantity).toFixed(2)}
              </Text>
            </View>
          ))}
        </View>

        {/* Total */}
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Sub-total: </Text>
          <Text>${data.total.toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Descuento (15%): </Text>
          <Text>${(data.total * 0.15).toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>TOTAL: </Text>
          <Text style={styles.totalValue}>
            ${(data.total - data.total * 0.15).toFixed(2)}
          </Text>
        </View>

        {/* Contact Information */}
        <View style={styles.contactInfo}>
          <Text style={styles.sectionTitle}>CONTACTO</Text>
          <Text>{data.contact.email}</Text>
          <Text>{data.contact.website}</Text>
        </View>

        {/* Payment Information */}
        <View style={styles.paymentInfo}>
          <View>
            <Text style={styles.sectionTitle}>INFORMACIÓN DE PAGO</Text>
            <Text>
              <Text style={styles.textBold}>Paypal Email:</Text>{" "}
              {data.clientPaypalEmail}
            </Text>
          </View>
          <View>
            <Text style={styles.sectionTitle}>FIRMA</Text>
            
            <Text>______________________</Text>
            <View style={styles.logoContainer}>
              <Image src={`/signatures.png`}   style={[
            
              {
               height: "50px"
              },
            ]} />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;
