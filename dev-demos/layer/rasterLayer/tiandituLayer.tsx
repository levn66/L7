import {
  GaodeMap,
  Scene,
  TiandituLayer
  // anchorType,
} from '@antv/l7';
import React from 'react';
// tslint:disable-next-line:no-duplicate-imports
import { FunctionComponent, useEffect } from 'react';

const Demo: FunctionComponent = () => {
  useEffect(() => {
    const newScene = new Scene({
      id: 'map',
      map: new GaodeMap({
        style: 'dark',
        center: [120.104697, 30.260704],
        pitch: 0,
        // zoom: 15,
      }),
    });

    newScene.on('loaded', () => {
      // const tiandituLayer = new TiandituLayer({
      //   type: 'satellite',
      //   token: '6557fd8a19b09d6e91ae6abf9d13ccbd'
      // })
      // newScene.addLayer(tiandituLayer.layer);

      // const tiandituLayer2 = new TiandituLayer({
      //   type: 'cia',
      //   token: '6557fd8a19b09d6e91ae6abf9d13ccbd'
      // })
      // newScene.addLayer(tiandituLayer2.layer);

      const tiandituLayer3 = new TiandituLayer({
        type: 'normal',
        token: '6557fd8a19b09d6e91ae6abf9d13ccbd'
      })
      newScene.addLayer(tiandituLayer3.layer);
    });
  }, []);

  return (
    <>
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
