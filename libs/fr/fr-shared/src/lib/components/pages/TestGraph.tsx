import { useStore } from 'fr/fr-states';
import styled from 'styled-components';

export const TestGraph = () => {
  const countries = useStore((state) => state.countries);

  // useEffect(() => {
  //   getCountriesByGraphMethods();
  // }, []);

  return (
    <MainContainer>
      <CardContainer>
        {countries.data.map((country, counryIndex) => (
          <Card key={counryIndex}>
            <Title>
              <span><i>🌍</i>{country.name}</span>
              <span><i>🌐</i>{country.abb}</span>
              <span><i>👪</i>{country.population}</span>
            </Title>
            {country.provinces && country.provinces.map((province, proIndex) => (
              <Card key={`---Pro${proIndex}`}>
                <Title>
                  <span><i>🏢</i>{province.name}</span>
                  <span><i>🏠</i>{province.abb}</span>
                  <span><i>👬</i>{province.population}</span>
                </Title>


                {province.cities && province.cities.map((city, cityIndex) => (
                  <Card key={`-----City${cityIndex}`}>
                    <Title>
                      <span><i>🏢</i>{city.name}</span>
                      <span><i>🏠</i>{city.abb}</span>
                      <span><i>👬</i>{city.population}</span>
                    </Title>
                  </Card>

                ))}
              </Card>
            ))}
          </Card>
        ))}
      </CardContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  font-family: 'Ubuntu', sans-serif;
  background-image: url("background.webp");
  background-color: #cccccc;
`


const CardContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
`

const Card = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: strech;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 20px 10px;
  margin: 0.5rem;
  border-radius: 10px;
  backdrop-filter: blur(7px);
  background-color: rgba(65, 65, 65, 0.308);
  border: 1px solid rgba(255, 255, 255, 0.089);
  cursor: pointer;
  border: 1px solid darkgoldenrod;
`

const Title = styled.p`
  font-size: 1.3rem;
  color: white;
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    padding: 0.5rem;
    i {
      font-style: normal;
      padding: 0.5rem;
    }
  }
`

