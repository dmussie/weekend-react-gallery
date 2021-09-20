import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList({list, selectPicture}) {
    
    // gallery item within map
    return (
        <div>
            
            {list.map(picture => (
            
    
                <GalleryItem key={picture.id} 
                picture={picture}  
                selectPicture={selectPicture} />
                
                
            
                
            ))}
            
        </div>
        
    )
}

export default GalleryList;