import styled from "styled-components";
const List = styled.ul``;

const Item = styled.li`
  font-size: large;
`;

export default function Test() {
  return (
    <List>
      {[...Array(10000)].map((e, i) => (
        <Item key={i}>test {i}</Item>
      ))}
    </List>
  );
}
