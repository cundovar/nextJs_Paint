'use client'

import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";

interface Post {
  name: string;
  description: string;
  image: string;
  categorie:string;
  theme:string
}

interface ArticleDetailPageProps {
  params: {
    id: string;
  };
}

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ params }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPost = async (id: number) => {
    const res = await fetch(`http://localhost:8020/api/oeuvres/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch article');
      
    }
    
      setIsLoading(false);
    
    const postData = await res.json();
    console.log( 'post',postData)
    
    if (postData) {
      setPost(postData);
    }
  };

  useEffect(() => {
    const postId = Number(params.id);
    if (!isNaN(postId)) {
      fetchPost(postId);
    }
  }, [params.id]);

  return (
    <>
    {isLoading ? (
 <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={500} height={600} />
    ):(
      post && (
        <>
     <div className="w-4/12 h-1/2 absolute border-amber-600 bottom-0 left-0 border" >
     <h1 style={{ paddingBottom: '10px' }}>titre : {post.name}</h1>
          <p style={{ paddingTop: '10px' }}>desc:{post.description}</p>
          <p style={{ paddingTop: '10px' }}>cat :{post.categorie}</p>
          <p style={{ paddingTop: '10px' }}>theme :{post.theme}</p>

              </div>
      <div className="w-8/12 absolute right-0 overflow-y-scroll">
        <article>
       
          <img src={`http://localhost:8020/images/oeuvre/${post.image}`} alt='y' />
        </article>

      </div>
    </>
      )
      )}


  
        </>
  );
};

export default ArticleDetailPage;





