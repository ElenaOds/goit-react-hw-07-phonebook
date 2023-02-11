import { filterContact, setFilter } from '../../redux/filterSlice';
import {Box, Label, Input} from './Filter.styled';
import { useSelector, useDispatch} from 'react-redux';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(setFilter);

    const handleChange = e => {
        const { value } = e.currentTarget;
        dispatch(filterContact(value));
    };


        return(
            <Box>
      <Label>Find contacts by Name </Label>
      <Input
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleChange}
      />
     
    </Box>
        )
       };


