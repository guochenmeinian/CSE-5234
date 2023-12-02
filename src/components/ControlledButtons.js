import { useNavigate } from 'react-router-dom';
import {
  Button,
  Stack,
} from '@mui/material';

const ControlledButtons = (secondaryButtonFunc) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleSubmit = () => {
        secondaryButtonFunc();
    };

    return (
        <Stack direction="row" justifyContent="space-between" mt={2}>
            <Button variant="outlined" onClick={handleGoBack}>
                Go Back
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
                Confirm
            </Button>
        </Stack>
    );
};

export default ControlledButtons;