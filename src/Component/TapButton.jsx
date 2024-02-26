export default function TabButton({ children, onSelect, isSelected }) {
  //also we can use props childer define props and called it props.childer

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
