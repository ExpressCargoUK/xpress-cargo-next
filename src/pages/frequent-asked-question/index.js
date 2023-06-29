import FrequentAskedQuestionComponent from "@/components/FrequentAskedQuestion/FrequentAskedQuestion";
import Head from "next/head";

const FrequentAskedQuestion = () => {
  return (
    <>
      <Head>
        <title>
          Freight Booking FAQ - Customs Duties Queries - Shipping Labels
        </title>
        <meta
          name="description"
          content="Kindly get some time to read frequently asked questions about air freight booking, sea freight booking, parcel booking, custom queries, shipping labels, etc."
        />
      </Head>
      <FrequentAskedQuestionComponent />
    </>
  );
};

export default FrequentAskedQuestion;
