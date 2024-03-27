


import FetchOeuvreCategorie from "@/component/FetchOeuvreCategorie";
import React from "react";

const Digital: React.FC = () => {
    const text="text de digital"
    const presentation="text presentation digital"
    
    
   
        const categorieUrl = "/api/categories/2"
        const title="digital"
    
        return(
            <>
    
            <FetchOeuvreCategorie categorieUrl={categorieUrl} title={title} presentation={presentation} text={text} ></FetchOeuvreCategorie>
            </>
        )
        }

export default Digital
