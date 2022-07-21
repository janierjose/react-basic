const Header = ({ title, name, edad, person }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{name}</p>
      <p>{edad}</p>
      <ul>
        <li>{person.name}</li>
        <li>{person.age}</li>
        <li>{person.email}</li>
      </ul>
    </>
  );
};

export default Header;
