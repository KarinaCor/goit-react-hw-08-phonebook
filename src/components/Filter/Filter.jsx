import { useDispatch, useSelector } from 'react-redux';
import * as SC from '../Filter/Filter.styled';

import { filterChange } from 'redux/filter/filter.slice';
import { selectContactsFilter } from 'redux/filter/filter.selector';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  // const filterContacts = evt => {
  //   // const filterValue = evt.target.value.toLowerCase().trim();
  //   dispatch(filterChange(evt.target.value));
  // };
 
  return (
    <SC.Wrapper>
      <SC.Label>
        Find contacts by name
        <SC.Input
          type="text"
          value={filter}
          onChange={(evt) => dispatch(filterChange(evt.target.value))}
        />
      </SC.Label>
    </SC.Wrapper>
  );
};

export default Filter;
