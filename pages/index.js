import Head from "next/head";
import HomePage from "../components/pages/HomePage";

export default function index() {
  return (
    <>
    <Head>
    <title>Warehouse Servicez</title>
    <meta charSet="utf-8" />
    <link rel="icon" href='https://res.cloudinary.com/da75fckow/image/upload/v1683447238/sikka-warehouse/logo_ul5ndq.png' />
    <meta property="og:locale" content="en_US" />
    <meta name="description" content= "Our warehouse rent and lease service offers a wide range of flexible and cost-effective options for businesses in need of storage space. With various sizes and locations available, we provide secure and well-maintained facilities equipped with modern amenities to meet your specific requirements.Maximize your operational efficiency with our reliable warehouse solutions.." />
    <meta property="og:title" content="Warehouse Servicez - HOME" />
    <meta name="keywords" content="warehouse services,warehouse servicez,sikka warehouse,sikka and associates,warehouses,best warehouses ,3 pl warehouse, warehouse, warehouse services, warehouse for rent, warehouse for lease, warehouse space rent, Warehouse rental, godown rental, godown for rent, godown for lease, godown,  warehouse service provider, Warehouse service, warehousing,  warehousing and logistics, warehousing solution, warehousing corporation,Amazone warehousing  " />
    <meta property="og:url" content="https://warehouseservicez.com/" />
    {/* <meta name="author" content="Your name here" /> */}
    <meta property="og:image" itemProp='https://res.cloudinary.com/da75fckow/image/upload/v1683447238/sikka-warehouse/logo_ul5ndq.png'/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
    <link rel="canonical" href="https://warehouseservicez.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content= "Our warehouse rent and lease service offers a wide range of flexible and cost-effective options for businesses in need of storage space. With various sizes and locations available, we provide secure and well-maintained facilities equipped with modern amenities to meet your specific requirements. Maximize your operational efficiency with our reliable warehouse solutions." />
    <meta property="og:site_name" content="Warehouse Servicez" />
    </Head>
    <HomePage/>
    </>
  )
}
