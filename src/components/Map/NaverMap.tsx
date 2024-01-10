import React, { useEffect } from "react";

interface NaverMapProps {
  markers: { lat: number; lng: number }[];
}

const NaverMap: React.FC<NaverMapProps> = ({ markers }) => {
  console.log(markers);

  useEffect(() => {
    let map = null;
    let markerList = [];

    const initMap = () => {
      if (markers.length === 0) return; // 마커가 없으면 함수 종료

      const defaultCenter = new naver.maps.LatLng(
        markers[0].lng / 10000000,
        markers[0].lat / 10000000
      );

      map = new naver.maps.Map("map", {
        center: defaultCenter,
        zoom: 11,
      });

      markers.forEach((markerInfo) => {
        console.log(markerInfo.lat, markerInfo.lng);
        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            markerInfo.lng / 10000000,
            markerInfo.lat / 10000000
          ),
          map: map,
          icon: {
            content: `
              <img alt="marker" src="/images/vector.png"/>
            `,
          },
        });

        markerList.push(marker);
      });
    };

    initMap();
  }, [markers]);

  const mapStyle = {
    width: "100%",
    height: "240px",
  };

  return (
    <div>
      <div id="map" style={mapStyle} />
    </div>
  );
};

export default NaverMap;
