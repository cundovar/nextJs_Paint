'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage: React.FC = () => {


  // throw new Error("Something went wrong!");


  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:8020/api/oeuvres');
        console.log('response.data:', response.data); // Vérifiez le contenu de response.data
        setArticles(response.data['hydra:member']); // Utilisez response.data['hydra:member']
      } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
      }
    };
  
    fetchArticles();
  }, []);


  return (
    <div>
      <h1>page.tsx</h1>
      <ul className='flex '>
        {articles.map((article: any) => (
          <li className='m-10 border' key={article.id}>
            <div className=''>
            <p>titre:{article.name}</p>
            {article.categorie && article.categorie ? (
              <div> <p> categorie : {article.categorie.name}</p> </div>
            ):(
            <div>pas de categorie</div>
            ) }
            <div className='h-96 w-96'>

            <img src={`http://localhost:8020/images/oeuvre/${article.image}`} alt={article.name} className=' object-cover h-full w-full' />
            </div>
          </div>
          </li>
         
        ))}
      </ul>
    </div>
  );
};

export default HomePage;


