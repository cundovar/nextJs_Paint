import { fetchArticleById } from '@/utils/fetchArticleById';
import { GetServerSideProps } from 'next';
import React from 'react';

interface Article {
  id: number;
  name: string;
  image: string;
  categorie: string;
  description?: string;
}

const ArticlePage: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div>
      <h1>{article.name}</h1>
      <img src={`http://localhost:8020/images/oeuvre/${article.image}`} alt={article.name} />
      <p>Catégorie : {article.categorie}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const articleId = params?.id as string;

  try {
    const article = await fetchArticleById(articleId);
    if (!article) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        article,
      },
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return {
      notFound: true,
    };
  }
};

export default ArticlePage;
