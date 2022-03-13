import linux from 'src/data/iso/linux';
import windowsData from 'src/data/iso/windows';

export type OSVersionIF = Record<string, OSDetailIF[]>
export type DistributionIF = Record<string, OSVersionIF>
export type OSImageDataIF = Record<string, DistributionIF>

export interface OSDetailMetaIF {
  'name': string,
  'architecture': string,
  'description': string,
  'at_date': string,
  'up_date': string,
  'size': string

}

export interface OSDetailIF {
  'Meta': OSDetailMetaIF,
  'Direct': string,
  'BitTorrent': string,
  'ED2K': string,
  'BoatCloud': string,
  'Extend': Array<{
    name: string,
    url: string
  }>

}


const OSImageData: OSImageDataIF = {
  linux: linux,
  windows: windowsData
}

export default OSImageData
