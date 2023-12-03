/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestLesan } from 'fr/fr-shared';
import { getCountriesByLesanMethods } from 'fr/fr-states';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

function Index() {
  return <TestLesan />;
}

export default Index;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery>
) => {
  const countries = await getCountriesByLesanMethods(1, 10);
  return {
    props: {
      initialZustandState: { countries },
    },
  };
};
