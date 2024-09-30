import React, { useEffect } from "react";
import '../Services/ServiceInfo.css';

const ServiceInfo = () => {
    return (
        <div className="boxes">
            {[
                { default: "DC.png", hover: "DCNext.png" },
                { default: "DF.png", hover: "DFNext.png" },
                { default: "DE.png", hover: "DENext.png" },
                { default: "GT.png", hover: "GTNext.png" },
                { default: "Component 2.png", hover: "Component 2Next.png" },
                { default: "TW.png", hover: "TWNext.png" },
                { default: "RCT.png", hover: "RCTNext.png" },
                { default: "OT.png", hover: "OTNext.png" },
                { default: "FMR.png", hover: "FMRNext.png" },
            ].map((image, index) => (
                <ImageContainer
                    key={index}
                    defaultImage={image.default}
                    hoverImage={image.hover}
                />
            ))}
        </div>
    );
};

const ImageContainer = ({ defaultImage, hoverImage }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className="image-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={defaultImage}
                alt="Default"
                className="defaultImage"
                style={{ opacity: isHovered ? 0 : 1 }}
            />
            <img
                src={hoverImage}
                alt="Hover"
                className="hoverImage"
                style={{ opacity: isHovered ? 1 : 0 }}
            />
        </div>
    );
};

export default ServiceInfo;
