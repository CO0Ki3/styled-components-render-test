import styled from "styled-components";
const List = styled.ul`
  li {
    font-size: large;
  }
`;

export default function Testt() {
  return (
    <List>
      {[...Array(10000)].map((e, i) => (
        <li key={i}>test {i}</li>
      ))}
    </List>
  );
}
