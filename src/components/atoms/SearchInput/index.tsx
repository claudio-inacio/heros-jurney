'use client';

import { memo } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { ISearchInput } from './SearchInput.interface';
import SearchIcon from '@mui/icons-material/Search';

function SearchInput(props: ISearchInput) {
  return (
    <div className="">

          <TextField
            // {...field}
            id='search-itens'
            type='search'            
            className="rounded-sm text-white "   
            color='warning'
            focused
            label={props.label}
            // autoFocus                  
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                console.log(event?.target?.value)
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="text-primary-orange"/>
                </InputAdornment>
              ),
            }}
            size='small'
            variant="outlined"
                        
          />

    </div>
  );
}

export default memo(SearchInput);
