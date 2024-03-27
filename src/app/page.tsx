'use client'
import { Skeleton } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // Simuler un délai de 2 secondes avant de récupérer les articles
        // setTimeout(async () => {
          const response = await axios.get('http://localhost:8020/api/oeuvres');
          console.log('response.data:', response.data); // Vérifiez le contenu de response.data
          setArticles(response.data['hydra:member']); // Utilisez response.data['hydra:member']
          setIsLoading(false); // Mettre isLoading à false une fois les données chargées
        // }, 2000);
      } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
      }
    };
  
    fetchArticles();
  }, []);

  return (
    <div>

<div className="w-4/12 h-1/2 absolute bottom-0 left-0 border" >
              

              </div>
  
      <ul className='flex flex-wrap '>
        { isLoading ? (
          <div className=" flex space-x-5 flex-wrap ">

          <div className="flex flex-col gap-2 w-96 h-96">
          <Skeleton variant="text" sx={{ bgcolor: 'grey.900' }}/>
          <Skeleton variant="text" sx={{ bgcolor: 'grey.900' }}/>
          <Skeleton
          sx={{ bgcolor: 'grey.900' }}
           variant="rectangular" width={350} height={200} />
          </div>

          <div className="flex flex-col gap-2 w-96 h-96">
          <Skeleton variant="text" sx={{ bgcolor: 'grey.900' }}/>
          <Skeleton variant="text" sx={{ bgcolor: 'grey.900' }}/>
          <Skeleton
          sx={{ bgcolor: 'grey.900' }}
           variant="rectangular" width={350} height={200} />
          </div>

          <div className="flex flex-col gap-2 w-96 h-96 ">
          <Skeleton variant="text" sx={{ bgcolor: 'grey.900' }}/>
          <Skeleton variant="text" sx={{ bgcolor: 'grey.900' }}/>
          <Skeleton
          sx={{ bgcolor: 'grey.900' }}
           variant="rectangular" width={350} height={200} />
          </div>
          <div className="flex flex-col gap-2 w-96 h-96">
          <Skeleton variant="text" sx={{ bgcolor: 'grey.900' }}/>
          <Skeleton variant="text" sx={{ bgcolor: 'grey.900' }}/>
          <Skeleton
          sx={{ bgcolor: 'grey.900' }}
           variant="rectangular" width={350} height={200} />
          </div>

          </div>

        ) : (
          articles.map((article: any) => (
            <li className='m-10 border' key={article.id}>
              <div className=''>
              { isLoading ? (
                  <Skeleton variant="text" sx={{ bgcolor: 'grey.900' }}/>):(
                    <p>titre:{article.name}</p>

                  )}
                {article.categorie && article.categorie ? (
                  <div> <p> categorie : {article.categorie}</p> </div>
                ) : (
                  <div>pas de categorie</div>
                )}
                <div className='h-96 w-96'>
                  {article ? (

                    <img
                      style={{
                        width: 210,
                        height: 118,
                      }}
                      alt={article.name}
                      src={`http://localhost:8020/images/oeuvre/${article.image}`}
                    />

                  ):(
                    <Skeleton
                    sx={{ bgcolor: 'grey.900' }}
                     variant="rectangular" width={210} height={118} />
                    
                  )
                  }
                </div>
              </div>
            </li>
          ))
         )}
      </ul>
    </div>
  );
};
export default HomePage