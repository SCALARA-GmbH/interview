
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const CustomGridItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

export default CustomGridItem;
