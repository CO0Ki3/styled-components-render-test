import styled from "styled-components";
const List = styled.li`
  font-size: large;
`;

export default function Testtt() {
  return (
    <ul>
      {[...Array(10000)].map((e, i) => (
        <List key={i}>test {i}</List>
      ))}
    </ul>
  );
}
