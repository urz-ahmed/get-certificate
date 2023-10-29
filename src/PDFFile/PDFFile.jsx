import { Page, Image, Document, StyleSheet, Text, Font, View, Link } from '@react-pdf/renderer';
import certificateImg from '../img/certificate.jpeg';
import PropTypes from 'prop-types';

// Register the 'Kalam' font
Font.register({ family: 'Kalam', src: '/Kalam-Regular.ttf' });

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
        fontSize: 36,
        position: 'absolute',
        top: '53%',
        right: '0%',
        transform: 'translateY(-50%)',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily: 'Kalam',
    },
    linkContainer: {
        position: 'absolute',
        bottom: '11%',
        left: '6%',   
    },
    linkText: {
        color: 'blue',
        textDecoration: 'underline',
        fontSize: 12,
    }
});

// Create Document Component
const PDFFile = ({ name }) => (
    <Document>
        <Page size='A4' style={styles.page} orientation='landscape'>
            <Image src={certificateImg} style={styles.img} />
            <Text style={styles.name}>{name}</Text>
            <View style={styles.linkContainer}>
                <Link src="https://www.example.com" style={styles.linkText}>
                    https://www.example.com
                </Link>
            </View>
        </Page>
    </Document>
);

PDFFile.propTypes = {
    name: PropTypes.string.isRequired,
}

export default PDFFile;
