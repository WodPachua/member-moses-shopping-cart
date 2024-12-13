import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { IconSearch } from '@tabler/icons-react';

// ----------------------------------------------------------------------
export default function ProductSearch() {

  return (
    <>
      {/* ------------------------------------------- */}
      {/* Sort Button */}
      {/* ------------------------------------------- */}
      <TextField
        id="outlined-search"
        placeholder="Search Product"
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
        onChange={() => {}}
      />
    </>
  );
}
