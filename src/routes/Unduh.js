import React from 'react'
import Navbar2 from "../../src/components/appBar/Navbar2";

const Unduh = () => {
    return (
        <>
            <Navbar2 />
            <embed height="100%" width="100%"
                style={{
                    position: "fixed"
                }}
                src='https://jakartasatu.jakarta.go.id/portal/apps/sites/#/unduh-jakarta-satu' />

        </>
    );
};

export default Unduh;