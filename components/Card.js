import styled from 'styled-components';

const CardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  ${({ featured }) =>
    featured &&
    `
    flex: 1 1 45%;
    max-width: 45%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
  `}
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
`;

const CardContent = styled.p`
  font-size: 1em;
`;

const Category = styled.span`
  background-color: #0070f3;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-size: 0.8em;
  margin-bottom: 10px;
  display: inline-block;
`;

const Card = ({ category, title, content, author, date, featured }) => {
  return (
    <CardContainer featured={featured}>
      <Category>{category}</Category>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
      <p>{author} | {date}</p>
    </CardContainer>
  );
};

export default Card;
