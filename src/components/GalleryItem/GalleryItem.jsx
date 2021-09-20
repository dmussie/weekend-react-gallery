import {useState} from 'react';

function GalleryItem({picture}) {
    const pictureId = picture.id;
    const [pictureSelected, setPictureSelected] = useState(false);
    const [pictureLikes, setPictureLike] = useState(0);

    //Conditional operator, if the picture is NOT clicked, display image
    //If picture IS clicked, display description
    return (
        <>      
            {
            pictureSelected ? (
                <p onClick={() => setPictureSelected(false)} key={pictureId}>{picture.description}</p>
            ) : (
                <p onClick={() => setPictureSelected(true)}><img key={pictureId} src={picture.path} /></p>
            )
            }
            
            <p>{pictureLikes} people love this!</p>
            <button onClick={() => setPictureLike(pictureLikes + 1)}>Love it!</button>
            

        </>    
    )
    
}

export default GalleryItem;