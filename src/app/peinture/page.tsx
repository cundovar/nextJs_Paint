import FetchOeuvreCategorie from "@/component/FetchOeuvreCategorie";
import React from "react";

const Peinture: React.FC = () => {

    const text="text de peinture"
    const presentation="text presentation peinture"

    
    
    
   
        const categorieUrl = "/api/categories/1"
        const title="peinture"
    
        return(
            <>
    
            <FetchOeuvreCategorie categorieUrl={categorieUrl} title={title} text={text} presentation={presentation} ></FetchOeuvreCategorie>
            </>
        )
        }

export default Peinture
