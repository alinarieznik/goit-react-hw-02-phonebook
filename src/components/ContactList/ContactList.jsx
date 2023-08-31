export const ContactList = ({ options, onDelete }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option.id}>
          <p>
            {option.name}: {option.number}
          </p>
          <button type="button" onClick={() => onDelete(option.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
