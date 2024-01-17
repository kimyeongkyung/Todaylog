import React, { useEffect } from "react";

interface NaverMapProps {
  markers: { lat: number; lng: number; name: string; category: string }[];
}

const NaverMap: React.FC<NaverMapProps> = ({ markers }) => {
  useEffect(() => {
    let map: naver.maps.Map;
    let markerList = [];
    let infowindowList: naver.maps.InfoWindow[] = [];
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

      markers.forEach((markerInfo, index) => {
        const category = markerInfo.category || "default";

        const iconSrc =
          category === "restaurant"
            ? "/images/icon_multiMarker_food.png"
            : category === "cafe"
            ? "/images/icon_multiMarker_cafe.png"
            : category === "leisure"
            ? "/images/icon_multiMarker_leisure.png"
            : "/images/icon_multiMarker_food.png";

        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            markerInfo.lng / 10000000,
            markerInfo.lat / 10000000
          ),
          map: map,
          icon: {
            content: `
              <img alt="marker" src="${iconSrc}">
            `,
          },
        });

        const infowindow = new naver.maps.InfoWindow({
          content: `<div class="custom-infowindow">${
            markerInfo.name || "Unknown Place"
          }</div>`,
          pixelOffset: new naver.maps.Point(0, -10), // InfoWindow 위치 조절
        });

        naver.maps.Event.addListener(marker, "mouseover", () => {
          infowindow.open(map, marker);
        });

        naver.maps.Event.addListener(marker, "mouseout", () => {
          infowindow.close();
        });

        markerList.push(marker);
        infowindowList.push(infowindow);
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
      <style jsx>{`
        .custom-infowindow {
          padding: 10px;
          background-color: #fff;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default NaverMap;
