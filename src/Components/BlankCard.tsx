'use client'
import { Card } from '@mui/material';

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  sx?: object;
};

const BlankCard = ({ children, className, sx }: Props) => {

  return (
    <Card
      sx={{ p: 0, border: 'none' , position: 'relative', sx, '&:hover': { boxShadow: 'rgb(0 0 0 / 15%) 0px 6px 25px' } }}
      className={className}
      elevation={1}
    >
      {children}
    </Card>
  );
};

export default BlankCard;
