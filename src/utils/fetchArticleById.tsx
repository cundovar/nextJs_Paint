interface Article {
    id: number;
    name: string;
    image: string;
    categorie: string;
    description:string
  }
  
  export async function fetchArticleById(id: string): Promise<Article | null> {
    // Supposons que vous ayez une API qui renvoie des données d'article
    // Vous devrez remplacer cette logique par la vraie logique pour récupérer les données de votre API
    try {
      // Supposons que vous avez une URL d'API pour récupérer un article par son ID
      const response = await fetch(`http://localhost:8020/api/oeuvres/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch article');
      }
      const data = await response.json();
      return {
        id: data.id,
        name: data.title,
        description: data.description,
        image:data.image,
        categorie:data.categorie
      };
    } catch (error) {
      console.error('Error fetching article by ID:', error);
      return null;
    }
  }