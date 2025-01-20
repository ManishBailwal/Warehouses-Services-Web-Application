import axios from 'axios';
import SplashScreen from '../../components/SplashScreen';

const index = ({ item }) => {

  return (
    <div>
        {item.city}
        {item.state}
    </div>
  );
};

export async function getServerSideProps({ params }) {
const { id } = params;
let item;
try {
  const response=await axios.get(`http://localhost:3000/api/warehouse?id=${id}`)

   item=response.data.warehouse;

    }
  catch(err){
    console.log(err)
  }

  return {
    props: {
      item
    },
  };
}

export default index;