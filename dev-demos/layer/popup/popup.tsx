import { GaodeMap, PointLayer, Popup, Scene } from '@antv/l7';
import { featureCollection, point } from '@turf/turf';
import React, { useState } from 'react';
// tslint:disable-next-line:no-duplicate-imports
import { FunctionComponent, useEffect } from 'react';

const Demo: FunctionComponent = () => {
  const [popup, setPopup] = useState<Popup | null>(null);

  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        style: 'dark',
        center: [120.104697, 30.260704],
        pitch: 0,
        zoom: 15,
      }),
      // logoVisible: false,
    });

    scene.on('loaded', () => {
      const newPopup = new Popup({
        closeOnClick: false,
      });
      newPopup.setLnglat({
        lng: 120.104697,
        lat: 30.260704,
      });
      const dom = document.createElement('div');
      dom.innerHTML = 'fadslifjsalkfjasdk';
      newPopup.setHTML(dom);

      const pointLayer = new PointLayer();
      pointLayer
        .source(featureCollection([point([120.104697, 30.260704])]))
        .color('#ff0000')
        .size(10);

      scene.addPopup(newPopup);
      scene.addLayer(pointLayer);
      setPopup(newPopup);
    });
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() => {
            popup?.show();
          }}
        >
          显示
        </button>
        <button
          onClick={() => {
            popup?.hide();
          }}
        >
          隐藏
        </button>
      </div>
      <div
        id="map"
        style={{
          height: '500px',
          position: 'relative',
        }}
      />
    </>
  );
};

export default Demo;
