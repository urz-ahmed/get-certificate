import { Page, Image, Document, StyleSheet, Text } from '@react-pdf/renderer';
import certificateImg from '../img/certificate.jpeg';
import PropTypes from 'prop-types';

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        position: 'relative',
    },
    img: {
        objectFit: 'cover',
        height: '99%',
    },
    name: {
        width: '100%',
        color: '#bd8e36',
        fontSize: '42px',
        position: 'absolute',
        top: '53%',
        right: '0%',
        transform: 'translateY(-50%)',
        textTransform: 'uppercase',
        textAlign: 'center',
    }
});

// Create Document Component
const PDFFile = ({ name }) => (
    <Document>
        <Page size='A4' style={styles.page} orientation='landscape'>
            <Image src={certificateImg} style={styles.img} />
            <Text style={styles.name}>{name}</Text>
        </Page>
    </Document>
);

PDFFile.propTypes = {
    name: PropTypes.string.isRequired,
}

export default PDFFile;
