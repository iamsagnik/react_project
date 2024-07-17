import React from 'react';
/*import {useEffect , useState } from 'react';
import Spinner from '../components/Spinner';
*/
import { useParams , useLoaderData } from 'react-router-dom';


const SingularJobPage = () => {

  const { id } = useParams();
  const job = useLoaderData();
  /* const [job , setJob]  = useState(null);
  const [loading , setLoading ] = useState(true);

  useEffect(() => {
    const fetchjobs = async () =>{

      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        console.log(data);
        setJob(data);
      } catch (error) {
         console.log('Error fetching data ' , error);
      }
      finally{
        setLoading(false);
      }      

    };
    fetchjobs();
  } , []);

  return  loading ? <Spinner/> : <h1>{job.title}</h1>;
*/

return (
  <h1>{job.title}</h1>
)  

};

const jobLoader = async ({ params }) =>{
  console.log(params);
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
}

export { SingularJobPage as default , jobLoader};