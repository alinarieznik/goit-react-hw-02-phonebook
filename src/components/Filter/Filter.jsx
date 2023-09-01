import { StyledFilter, StyledInput } from './Filter.styled';

export const Filter = ({ onChangeContacts }) => {
  return (
    <StyledFilter htmlFor="filter">
      Find contacts by name
      <StyledInput
        name="filter"
        onChange={e => {
          onChangeContacts(e.currentTarget.value);
        }}
      ></StyledInput>
    </StyledFilter>
  );
};
