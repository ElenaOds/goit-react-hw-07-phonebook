import propTypes from 'prop-types';
import {Box, Label, Input} from './Filter.styled';

export const Filter = ({ filter, handleChange }) => (
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
  );
  
  Filter.propTypes = {
    filter: propTypes.string.isRequired,
    handleChange: propTypes.func.isRequired,
  };