'use client'
import React, { useEffect, useState } from "react";
import { UrlPeintureDigital } from "@/utils/varaibleFetch";
import { fetchArticles } from "@/utils/fetch";
import { Skeleton } from "@mui/material";
import { fetchArticlesCategorie } from "@/utils/fetcharticleDigital";
import Link from "next/link";


interface Props {
  categorieUrl: string;
  title:string;
  presentation:string;
  text:string
}

const FetchOeuvreCategorie: React.FC<Props> = ({ categorieUrl,title,presentation,text }) => {
  const { articles, isLoading } = fetchArticlesCategorie(UrlPeintureDigital, categorieUrl);
  const [categorieName, setCategorieName] = useState<string>("");
  const [themeName, setThemeName] = useState<string>("");

  useEffect(() => {
    // Fonction pour récupérer le nom de la catégorie à partir de son URL
    const fetchCategorieName = async () => {
      if (categorieUrl) {
        try {
          const response = await fetch(categorieUrl);
          const data = await response.json();
          setCategorieName(data.name);
        } catch (error) {
          console.error("Erreur lors de la récupération du nom de la catégorie :", error);
        }
      }
    };

    // Fonction pour récupérer le nom du thème à partir de son URL
    const fetchThemeName = async () => {

      if (categorieUrl) {
        try {
          const response = await fetch(categorieUrl);
          const data = await response.json();
          setThemeName(data.name);
        } catch (error) {
          console.error("Erreur lors de la récupération du nom de la catégorie :", error);
        }
      }
      
    };

    fetchCategorieName();
    fetchThemeName();
  }, [categorieUrl]);
  return (
    <>
    <div className="border flex border-lime-900 w-4/12 h-1/2 absolute left-0 top-0 ">
          <div className="w-4/12 border"></div>
          <div className="w-8/12 border ">
             <p>
            saerch theme

            </p>
            <p>
            seach price

            </p>
          </div>
    </div>
     <div className="w-4/12 h-1/2 absolute border-amber-600 bottom-0 left-0 border" >
       <h1> {presentation} </h1>
       <p>{text} </p>
     </div>
     <div className="absolute right-0 w-8/12 h-full border overflow-y-scroll">

      <div className="text-4xl">{title} </div>
      <ul className='flex flex-wrap h-full '>
        {isLoading ? (
          <div className="flex space-x-5 flex-wrap  ">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex flex-col gap-2 w-96 h-96">
                <Skeleton variant="text" sx={{ bgcolor: 'grey.900' }} />
                <Skeleton variant="text" sx={{ bgcolor: 'grey.900' }} />
                <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={350} height={200} />
              </div>
            ))}
          </div>
        ) : (
          articles.map((article: any) => (
            <li className='   border' key={article.id}>
              <div>
                <p>titre: {article.name}</p>
                {article.categorie ? (
                  <div><p> categorie : {categorieName}</p></div>
                ) : (
                  <div>pas de categorie</div>
                )}
                {article.theme ? (
                  <div><p> theme : {themeName}</p></div>
                ) : (
                  <div>pas de theme</div>
                )}
                <div className='p-2 cursor-pointer'>
                  <Link href={`/articles/${article.id}`}>
            

                  <img
                    style={{ width: '20rem', height:'20rem' }}
                    alt={article.name}
                    src={`http://localhost:8020/images/oeuvre/${article.image}`}
                  />
                  

                  </Link>
                </div>
              </div>
              <div className="">
                {article.description ? (
                    <p> description : {article.description} </p>
                ):(
                  <div>
                  <p> Cette oeuvre n'a pas de description</p>

                  </div>
                )}
              </div>
            </li>
          ))
        )}
      </ul>
     </div>
    </>
  );
};

export default FetchOeuvreCategorie;



