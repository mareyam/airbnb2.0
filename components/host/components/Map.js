// import React from "react";
// import GoogleMapReact from "google-map-react";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function Map() {
//   const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627,
//     },
//     zoom: 11,
//   };

//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <TransformWrapper>
//         <TransformComponent>
//           <GoogleMapReact
//             bootstrapURLKeys={{ key: "" }}
//             defaultCenter={defaultProps.center}
//             defaultZoom={defaultProps.zoom}
//           >
//             <AnyReactComponent
//               lat={59.955413}
//               lng={30.337844}
//               text="My Marker"
//             />
//           </GoogleMapReact>
//         </TransformComponent>
//       </TransformWrapper>
//     </div>
//   );
// }

import React, { Component } from "react";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Example = () => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <img
          src="/map1.png"
          alt="test"
          style={{ width: "100%", height: "100vh" }}
        />
      </TransformComponent>
    </TransformWrapper>
  );
};
export default Example;
