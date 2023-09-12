import React, { useEffect } from 'react';

const Peta3DTransitOriented = () => {
    useEffect(() => {
        document.title = "Peta 3D Transit Oriented | Jakarta Satu (Satu Peta, Satu Data, Satu Kebijakan)";
    }, []);

    return (
        <>
            <embed height="100%" width="100%" style={{ position: "fixed" }} src='https://jakartagis.maps.arcgis.com/apps/webappviewer3d/index.html?id=af3419d78077451dbf820a449b9e12db' />
        </>
    );
};

export default Peta3DTransitOriented;