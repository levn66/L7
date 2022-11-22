import { RasterLayer } from '@antv/l7-layers';
import { TiandituLayerType } from '../constants';

export interface ITiandituLayerOption {
  type: 'normal' | 'satellite' | 'cva' | 'cia'; // 天地图图层类别
  token: string; // 在天地图官网注册的token
}

export { TiandituLayer };

export default class TiandituLayer {
  private layerOption: Partial<ITiandituLayerOption>;
  private layer: RasterLayer;

  constructor(option?: Partial<ITiandituLayerOption>) {
    console.log('tianditu');
    this.layerOption = {
      ...this.getDefault(),
      ...option,
    };
    this.init();
  }

  public getDefault(): Partial<ITiandituLayerOption> {
    return {
      type: 'normal',
    };
  }

  public init() {
    const url =
      TiandituLayerType[this.layerOption.type!] +
      `&tk=${this.layerOption.token!}`;
    this.layer = new RasterLayer({
      zIndex: 1,
    });
    this.layer.source(
      // 'https://t{1-2}.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk=6557fd8a19b09d6e91ae6abf9d13ccbd',
      url,
      {
        parser: {
          type: 'rasterTile',
          tileSize: 256,
          zoomOffset: 0,
        },
      },
    );
  }
}
