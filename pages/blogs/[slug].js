import Head from "next/head";
import BlogDynamic from "../../components/pages/blogs/blogDynamic";
export default function index({ data }) {
  if (!data) {
    return <h1>PAGE NOT FOUND</h1>
  }
  return (
    <>
      <Head>

        <meta charSet="utf-8" />
        <link rel="icon" href='https://res.cloudinary.com/da75fckow/image/upload/v1683447238/sikka-warehouse/logo_ul5ndq.png' />
        <meta name="description" content="Welcome to the Warehouse Services , where we build your visions." />
        <meta property="og:url" content="https://warehouseservicez.com/" />
        {/* <meta name="author" content="Your name here" /> */}
        <meta property="og:image" itemProp='https://res.cloudinary.com/da75fckow/image/upload/v1683447238/sikka-warehouse/logo_ul5ndq.png' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <link rel="canonical" href="https://warehouseservicez.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Warehouse Servicez" />
        <title>{`${data.head.title}`}</title>
        <meta name="description" content={`${data.head.description}}`} />
        <meta
          property="og:title"
          content={`${data.head.title || 'title'}}`}
        />
        <meta name="keywords" content={`${data.head.keywords || 'some_keywords'}`} />
        <meta property="og:description" content={`${data.head.description || 'description'}}`} />
      </Head>
      {data ?
        <BlogDynamic data={data} />
        :
        <h1 >PAGE NOT FOUND</h1>
      }
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  let data = null;
  try {
    const response = await fetch(`https://www.warehouseservicez.com/api/blogBasedOnCondition`, {
      method: 'POST',
      body: JSON.stringify({
        "condition": {
          "pageSlug": slug,
          "isActive": true
        }
      })

    });
    if (response.status === 200 || response.status === 201) {
      data = await response.json();
      data = data.data.length > 0 ? data.data[0] : null;
    }
  } catch (err) {
    console.log(err);
  }



  return { props: { data: data } };

  // const { slug } = context.params;
  // let data = null;
  // try {
  //   const response = await fetch(
  //     `https://greatguestposts.com/api/blog/getBasedOnCondition`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         condition: {
  //           pageSlug: slug,
  //         },
  //       }),
  //     }
  //   );
  //   if (response.status === 200 || response.status === 201) {
  //     data = await response.json();
  //     data = data.data[0];
  //   }
  // } catch (err) {}
  // return { props: { data: data } };
}
