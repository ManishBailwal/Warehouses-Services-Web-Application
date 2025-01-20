import Head from "next/head";
import Warehouses from "../../components/pages/Warehouses";

export default function index() {
  return (
    <>
    <Head>
    <title>Warehouse Servicez - Warehouses</title>
    <meta charSet="utf-8" />
    <link rel="icon" href='https://res.cloudinary.com/da75fckow/image/upload/v1683447238/sikka-warehouse/logo_ul5ndq.png' />
    <meta property="og:locale" content="en_US" />
    <meta name="description" content="Warehouses are large storage facilities designed to store and manage goods and materials on a commercial scale. These buildings typically feature high ceilings, wide open spaces, and efficient organization systems such as racks and shelves. They play a crucial role in supply chains, enabling inventory management and distribution operations." />
    <meta property="og:title" content="Warehouse Servicez - Warehouses" />
    <meta name="keywords" content="warehouse services,warehouse servicez,sikka warehouse,sikka and associates,warehouses,best warehouses,3 pl warehouse, warehouse, warehouse services, warehouse for rent, warehouse for lease, warehouse space rent, Warehouse rental, godown rental, godown for rent, godown for lease, godown,  warehouse service provider, Warehouse service, warehousing,  warehousing and logistics, warehousing solution, warehousing corporation,Amazone arehousing" />
    <meta property="og:url" content="https://warehouseservicez.com/" />
    {/* <meta name="author" content="Your name here" /> */}
    <meta property="og:image" itemProp='https://res.cloudinary.com/da75fckow/image/upload/v1683447238/sikka-warehouse/logo_ul5ndq.png'/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
    <link rel="canonical" href="https://warehouseservicez.com/" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Warehouses are large storage facilities designed to store and manage goods and materials on a commercial scale. These buildings typically feature high ceilings, wide open spaces, and efficient organization systems such as racks and shelves. They play a crucial role in supply chains, enabling inventory management and distribution operations." />
    <meta property="og:site_name" content="Warehouse Servicez" />
    </Head>
    <Warehouses />
    </>
  )
}
