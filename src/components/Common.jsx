import { styled } from '@mui/material/styles';
import { Box, Paper, FormControl } from '@mui/material';

export const StackItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey['300'],
  width: theme.spacing(60),
  padding: theme.spacing(2)
}));

export const WrapContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100vh'
}));

export const FormContainer = styled(FormControl)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  backgroundColor: theme.palette.grey['300'],
  width: theme.spacing(60),
  padding: theme.spacing(2)
}));
