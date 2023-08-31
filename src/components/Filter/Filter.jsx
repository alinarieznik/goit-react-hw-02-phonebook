export const Filter = ({ onChangeContacts }) => {
  return (
    <input
      onChange={e => {
        onChangeContacts(e.currentTarget.value);
      }}
    ></input>
  );
};
