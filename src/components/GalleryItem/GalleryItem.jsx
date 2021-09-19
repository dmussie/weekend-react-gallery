import {useState} from 'react';

function GalleryItem({picture, selectPicture}) {
    const pictureId = picture.id;
    const [pictureSelected, setPictureSelected] = useState(false);
    
    return (
        <>      
            {
            pictureSelected ? (
                <p onClick={() => setPictureSelected(false)} key={pictureId}>{picture.description}</p>
            ) : (
                <p onClick={() => setPictureSelected(true)}><img key={pictureId} src={picture.path} /></p>
            )
            }
            
             
        </>    
    )
    
}

export default GalleryItem;