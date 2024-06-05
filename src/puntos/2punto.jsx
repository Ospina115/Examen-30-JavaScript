// crear ima galeria de imagenes que muestre navegacion y visualizacion de imagenes en un modal
// definir un elemento <image-gallery>
// usar el shadow Dom para encapsular el estilo y la estructura del componente
// debe aceptar una lista de URLS de imagenes como atributo
// debe mostrar las miniaturas de las imagenes
// al hacer click en la miniatura debe abrirse un modal con la imagen ampliada
import "../css/SegundoPunto.css"
import React, { useState } from 'react';

const Gallery = () => {
    const [imagenes, setImagenes] = useState([
        { src: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/06/X-Men-Havok-Comic-Art-Scream.jpg', alt: 'Imagen 1' },
        { src: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/VNLOPVBDM5AATCOW2VHOCMYQHA.jpg', alt: 'Imagen 2' },
        { src: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/x-men-s-cyclops-with-intriguing-blurred-costume-behind.jpg', alt: 'Imagen 3' },
        { src: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/rogue-xmen.jpg', alt: 'Imagen 4' },
        { src: 'https://i.pinimg.com/736x/15/7c/0a/157c0a34a52aa8e6ab6afe852ee7af57.jpg', alt: 'Imagen 5' },
        { src: 'https://img.redbull.com/images/c_crop,x_363,y_0,h_407,w_325/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/02/11/87f8642d-126d-4219-acc9-12ca261bfe39/wolverine', alt: 'Imagen 6' },
        { src: 'https://i.pinimg.com/originals/3d/4d/1f/3d4d1ffca3b972a9cd43fff96399e601.jpg', alt: 'Imagen 7' },
        { src: 'https://upload.wikimedia.org/wikipedia/en/0/03/Iceman.png', alt: 'Imagen 8' },
        { src: 'https://i.pinimg.com/736x/38/e0/90/38e090d55e951ac38853430d6b39691a.jpg', alt: 'Imagen 9' },
        { src: 'https://media.thenerdstash.com/wp-content/uploads/2023/11/Nightcrawler-2-1024x576.jpg', alt: 'Imagen 10' },
        { src: 'https://hips.hearstapps.com/hmg-prod/images/magento-1568362613.jpg', alt: 'Imagen 11' },
        { src: 'https://comicvine.gamespot.com/a/uploads/scale_medium/12/124259/7823917-marauders2019019_cov-scaled.jpg', alt: 'Imagen 12' },
        //...
    ]);

    const [indiceActual, setIndiceActual] = useState(0);

    const handleClick = (indice) => {
        setIndiceActual(indice);
    };

    const handleSiguiente = () => {
        setIndiceActual((indiceActual + 1) % imagenes.length);
    };

    const handleAnterior = () => {
        setIndiceActual((indiceActual - 1 + imagenes.length) % imagenes.length);
    };

    return (
        <div className="galeria">
        {imagenes.map((imagen, indice) => (
            <img
            key={indice}
            src={imagen.src}
            alt={imagen.alt}
            onClick={() => handleClick(indice)}
            className={indice === indiceActual? 'seleccionada' : ''}
            />
        ))}
        <Modal
            imagen={imagenes[indiceActual]}
            onSiguiente={handleSiguiente}
            onAnterior={handleAnterior}
        />
        </div>
    );
    };

    const Modal = ({ imagen, onSiguiente, onAnterior }) => {
    return (
        <div className="modal">
            <img src={imagen.src} alt={imagen.alt} />
            <button onClick={onAnterior}>Anterior</button>
            <button onClick={onSiguiente}>Siguiente</button>
        </div>
    );
};

export default Gallery;
