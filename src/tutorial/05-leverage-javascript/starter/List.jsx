import { people } from "../../../data";
import Person from "./Person";
const List = () => {
  return (
    <ul>
      {people.map((person) => (
        <Person person={person} other={person} key={person.id} />
      ))}
    </ul>
  );
};
export default List;
