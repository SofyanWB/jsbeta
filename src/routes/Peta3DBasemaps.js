import React, { useEffect } from 'react';

const Peta3DBasemaps = () => {
    useEffect(() => {
        document.title = "Peta 3D Basemaps | Jakarta Satu (Satu Peta, Satu Data, Satu Kebijakan)";
    }, []);

    return (
        <>
            <embed height="100%" width="100%" style={{ position: "fixed" }} src='https://jakartagis.maps.arcgis.com/apps/webappviewer3d/index.html?id=5e243a6293154d3280607f3424c7c4dd' />
        </>
    );
};

export default Peta3DBasemaps;