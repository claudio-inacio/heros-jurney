
import { memo, useEffect, useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { ISearchInput } from './SearchInput.interface';
import SearchIcon from '@mui/icons-material/Search';
import { HeroInfoDispatch, useHeroSelector } from '@/store';
import { useDispatch } from 'react-redux';
import { IListHeros, actions } from '@/store/battle/battle-slice';

function SearchInput(props: ISearchInput) {
  const dispatch = useDispatch<HeroInfoDispatch>();
  const heros = useHeroSelector(state => state.herosInfo.listheros);
  const [fullHeros, setFullHeros] = useState<IListHeros[]>([]);
  

  
  useEffect(() => {  
    if(fullHeros.length === 1 || fullHeros.length === 0){
      setFullHeros(heros)
    }
  }, [])
    
  return (
    <div className="">

          <TextField    
            id='search-itens'
            type='search'            
            className="rounded-sm text-white "   
            color='warning'
            focused
            label={props.label}            
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                console.log(event?.target?.value)
                    const teste = fullHeros.filter((hero) =>  hero.name.toLowerCase().includes(event.target.value.toLocaleLowerCase()));                  
                    console.log('teste', teste)
                    dispatch(actions.setListHeros(teste));

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
