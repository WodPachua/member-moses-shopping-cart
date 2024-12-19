import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { IconSearch } from '@tabler/icons-react';

interface ProductSearchProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function ProductSearch({ onSearch, value }: ProductSearchProps) {
  return (
    <TextField
      id="outlined-search"
      placeholder="Search Product"
      value={value}
      size="small"
      type="search"
      variant="outlined"
      InputProps={{ 
        startAdornment: (
          <InputAdornment position="start">
            <IconSearch size="14" />
          </InputAdornment>
        ),
      }}
      fullWidth
      onChange={onSearch}
    />
  );
}