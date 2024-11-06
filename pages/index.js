import styled from 'styled-components';
import Card from '../components/Card';

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 2.5em;
  margin: 20px 0;
`;

const Section = styled.div`
  margin: 40px 0;
`;

const SectionHeader = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const FeaturedContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const RecentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export default function Home() {
  return (
    <Container>
      <Header>Let's do it together.</Header>

      <Section>
        <SectionHeader>Featured Posts</SectionHeader>
        <FeaturedContainer>
          <Card
            category="PHOTOGRAPHY"
            title="The Road Ahead"
            content="The road ahead might be paved - it might not be."
            author="Mat Vogels"
            date="September 25, 2015"
            featured
          />
          <Card
            category="ADVENTURE"
            title="From Top Down"
            content="Once a year, go someplace you've never been before."
            author="William Wong"
            date="September 25, 2015"
            featured
          />
        </FeaturedContainer>
      </Section>

      <Section>
        <SectionHeader>Most Recent</SectionHeader>
        <RecentContainer>
          <Card
            category="NATURE"
            title="Still Standing Tall"
            content="Life begins at the end of your comfort zone."
            author="William Wong"
            date="9/25/2015"
          />
          <Card
            category="PHOTOGRAPHY"
            title="Sunny Side Up"
            content="No place is ever as bad as they tell you it’s going to be."
            author="Mat Vogels"
            date="9/25/2015"
          />
          <Card
            category="VACATION"
            title="Through the Mist"
            content="Travel makes you see what a tiny place you occupy in the world."
            author="William Wong"
            date="9/25/2015"
          />
          <Card
            category="VACATION"
            title="Awaken Early"
            content="Not all those who wander are lost."
            author="Mat Vogels"
            date="9/25/2015"
          />
          <Card
            category="RELAXATION"
            title="Water Falls"
            content="We travel not to escape life, but for life not to escape us."
            author="Mat Vogels"
            date="9/25/2015"
          />
          <Card
            category="TRAVEL"
            title="Try it Always"
            content="The world is a book, and those who do not travel read only one page."
            author="Mat Vogels"
            date="9/25/2015"
          />
        </RecentContainer>
      </Section>
    </Container>
  );
}
