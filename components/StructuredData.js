import Head from 'next/head';

function StructuredData({ data }) {
  if (!data) {
    return null;
  }

  const payloads = Array.isArray(data) ? data : [data];

  return (
    <>
      {payloads.map((payload, index) => (
        <Head key={index}>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }} />
        </Head>
      ))}
    </>
  );
}

export default StructuredData;

