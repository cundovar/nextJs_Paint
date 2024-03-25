'use client'
import React from "react";
import { UrlPeintureDigital } from "@/utils/varaibleFetch";
import { fetchArticles } from "@/utils/fetch";
import { Skeleton } from "@mui/material";
import { fetchArticlesDigital } from "@/utils/fetcharticleDigital";

const Digital: React.FC = () => {
  const categorieUrl = "/api/categories/2";
  const { articles, isLoading } = fetchArticlesDigital(UrlPeintureDigital,categorieUrl)
  return (
    <>
      <div className="text-4xl">digital</div>
      <ul className='flex flex-wrap '>
        {isLoading ? (
          <div className="flex space-x-5 flex-wrap">
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
            <li className='m-10 border' key={article.id}>
              <div>
                <p>titre: {article.name}</p>
                {article.categorie ? (
                  <div><p> categorie : {article.categorie}</p></div>
                ) : (
                  <div>pas de categorie</div>
                )}
                <div className='h-96 w-96'>
                  <img
                    style={{ width: 210, height: 118 }}
                    alt={article.name}
                    src={`http://localhost:8020/images/oeuvre/${article.image}`}
                  />
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default Digital;
