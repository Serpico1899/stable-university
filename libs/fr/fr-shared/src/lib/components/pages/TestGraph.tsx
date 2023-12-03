import { useEffect } from 'react';
import { TemplateLayout } from '../template/templateLayout';
import {
  getCountries,
  getCountriesByGraphMethods,
  useStore,
} from 'fr/fr-states';
import styled from 'styled-components';

export const TestGraph = () => {
  const countries = useStore((state) => state.countries);

  // useEffect(() => {
  //   getCountriesByGraphMethods();
  // }, []);

  return (
    <TemplateLayout>
      <Wrapper>
        {countries.data.map((country, indx) => (
          <div className="country" key={indx}>
            <div className="country--title title">
              <h2>نام کشور: {country.name}</h2>
              <p className="abb">مخفف: {country.abb}</p>
              <p className="population">جمعیت: {country.population}</p>
            </div>
            <div className="detail">
              {country.provinces?.map((province, index) => (
                <div className="province" key={index}>
                  <div className="province--title title">
                    <h3>نام‌استان‌:{province.name}</h3>
                    <p className="abb">مخفف‌:{province.abb}</p>
                    <p className="population">جمعیت: {province.population}</p>
                  </div>
                  <div className="cities">
                    {province?.cities?.map((province, index) => (
                      <div className="city" key={index}>
                        <h3>نام شهرستان:{province.name}</h3>
                        <p className="abb">مخفف‌:{province.abb}</p>
                        <p className="population">
                          جمعیت: {province.population}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Wrapper>
    </TemplateLayout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* background: rgba(11, 11, 11, 0.75); */
  backdrop-filter: blur(7.7px);
  -webkit-backdrop-filter: blur(7.7px);
  background-image: url('/image/earth_horizon-1920x1080.jpeg');

  .country {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid bisque;
    background: #52796f;
    border-radius: 7px;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .country--title {
    border-radius: 7px 7px 0 0;
    padding: 2px 5px;
    border-bottom: 1px solid bisque;
    background: #2f3e46;
    color: gainsboro;
    backdrop-filter: blur(10px);
  }

  .detail {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 10px;
  }

  .province {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: gray;
    border: 1px solid bisque;
    border-radius: 7px;
  }

  .province--title {
    border-radius: 7px 7px 0 0;
    padding: 0 5px;
    border-bottom: 1px solid bisque;
    background: #354f52;
  }

  .cities {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;
  }

  .city {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #cad2c5;
    flex-grow: 1;
    border: 1px solid bisque;
    padding: 2px 5px;
    border-radius: 7px 7px 0 0;
    color: black;
  }

  /* display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.7rem;
  font-weight: 400;
  color: #fff;
  background-color: #004643;
  padding: 10px;
  h1 {
    font-size: 2rem;
    font-weight: 400;
  }
  .country .sections {
    display: grid;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 15px;
    grid-template-columns: repeat(3, 1fr);
  }
  .sections {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .country {
    padding: 20px 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    border: 2px solid #fff;
  }
  .abb {
    text-align: center;
  }
  .population {
    text-align: left;
  }
  .country > * {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    padding: 20px;
  }

  .province {
    width: 100%;
    padding: 0.8rem;
    padding-top: 0;
    margin-bottom: 0;
    border: 2px dashed #fff;
    margin: 0 auto;
  }
  .province .sections {
    padding: 15px 0;
  }

  .cities {
    padding: 10px 10px;
    border: 2px dotted #fff;
  }
  .city h2,
  .city h3,
  .city p {
    margin-bottom: 0;
  }
  .cities .sections {
    padding: 0;
    margin-bottom: 0.6rem;
  }
  .cities .sections:last-child {
    margin-bottom: 0;
  }
  .city .sections {
    padding-right: 0;
    padding-left: 0;
  } */
`;
