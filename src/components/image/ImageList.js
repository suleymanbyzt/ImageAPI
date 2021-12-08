import React from 'react';

const ImageList = ({images}) =>{
    const preparedImageList = images.map(image =>{
        return(
            <img src={image.urls.regular} alt=""/>
        )
    });
    return(
        <div>
            {images.length} Kadar resim var.
            {preparedImageList}
        </div>
    )
}

export default ImageList;