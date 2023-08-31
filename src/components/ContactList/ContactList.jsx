export const ContactList = ({ options }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option.id}>
          <p key={option.id}>
            {option.name}: {option.number}
          </p>
        </li>
      ))}
    </ul>
  );
};
