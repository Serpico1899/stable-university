// // src/store.ts
import { gql, request } from 'graphql-request';
import { store } from '../../../nextStore';
// import { City } from './';

export const getCountriesByGraphMethods = async (
  page: number = 1,
  limit: number = 10
) => {
  const str = store;

  str &&
    str.setState((states) => ({
      ...states,
      countries: {
        ...states.countries,
        loader: true,
      },
    }));

  const query = gql`
    {
      getFiftyCitiesOfCountry(pageNumber: ${page}, limit: ${limit}) {
        id
        name
        abb
        population
        provinces {
          id
          name
          abb
          population
          cities {
            id
            name
            abb
            population
          }
        }
      }
    }
  `;
  try {
    console.log(query);
    const res: any = await request('http://localhost:3050/graphql', query);
    console.log({res});

    str &&
      str.setState((states) => ({
        ...states,
        countries: {
          ...states.countries,
          data: [...res.getFiftyCitiesOfCountry],
          loader: false,
        },
      }));

    return {
      data: res.getFiftyCitiesOfCountry,
      error: null,
      loader: false,
    };
  } catch (error: any) {
    // str &&
    // str.setState((states) => ({
    //   cities: {
    //     ...states,
    //     error: error.message ? error.message : 'we have a problem',
    //     loader: false,
    //   },
    // }));
    console.log(1);

    return {
      data: [],
      error: error.message ? error.message : 'we have a problem',
      loader: false,
    };
  }
};
