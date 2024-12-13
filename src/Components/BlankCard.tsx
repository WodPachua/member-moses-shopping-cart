'use client'
import { Card } from '@mui/material';

type Props = {
  className?: string;
  children: JSX.Element | JSX.Element[];
  sx?: never;
};

const BlankCard = ({ children, className, sx }: Props) => {

  return (
    <Card
      sx={{ p: 0, border: 'none' , position: 'relative', sx }}
      className={className}
      elevation={9}
      variant={'outlined'}
    >
      {children}
    </Card>
  );
};

export default BlankCard;
