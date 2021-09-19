import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList({list, selectPicture}) {
    
    // gallery item within map
    return (
        <p>
            {list.map(picture => (
            
    
                <GalleryItem key={picture.id} 
                picture={picture}  
                selectPicture={selectPicture} />
                
                
            
                
            ))}
        </p>
        
    )
}

export default GalleryList;