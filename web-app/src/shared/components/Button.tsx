
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';



const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '24px 12px',
    border: '1px solid',
    height: '48px',
    width: '166px',
    fontWeight: 'bold',
    letterSpacing: '0.3px',
    lineHeight: '22px',
    textAlign: 'center',
    backgroundColor: '#000',
    borderColor: '#000',
    borderRadius: 0,
    fontFamily: [
        'Open Sans',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
    ].join(','),
    '&:hover': {
        backgroundColor: '#77797A',
        borderColor: '#77797A',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#77797A',
        borderColor: '#77797A',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

export default CustomButton;