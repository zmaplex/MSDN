import {OSVersionIF} from 'src/data/iso';
import MetaList from 'src/data/iso/linux/debian/meta';


const architectureList = ['amd64', 'arm64', 'armel', 'armhf', 'i386', 'mips', 'mips64el', 'mipsel', 'ppc64el', 's390x', 'multi-arch']


const CD: OSVersionIF = {
  // 'Jessie 8.11 CD': [
  //   {
  //     'Meta': {
  //       'name': 'debian-8.11.1-amd64-CD-1.iso',
  //       'architecture': 'amd64',
  //       'description': MetaList['8.11'].description,
  //       'size': 'unknown',
  //       'at_date': '2021-10-13 22:19',
  //       'up_date': '2021-10-13 22:19'
  //     },
  //     'Direct': '',
  //     'BitTorrent': 'https://cdimage.debian.org/cdimage/archive/8.11.1/amd64/bt-cd/debian-8.11.1-amd64-CD-1.iso.torrent',
  //     'ED2K': '',
  //     'BoatCloud': '',
  //     'Extend': []
  //   },
  //   {
  //     'Meta': {
  //       'name': 'debian-8.11.1-amd64-CD-1.iso',
  //       'architecture': 'amd64',
  //       'description': MetaList['8.11'].description,
  //       'size': 'unknown',
  //       'at_date': '2021-10-13 22:19',
  //       'up_date': '2021-10-13 22:19'
  //     },
  //     'Direct': '',
  //     'BitTorrent': 'https://cdimage.debian.org/cdimage/archive/8.11.1/amd64/bt-cd/debian-8.11.1-amd64-CD-1.iso.torrent',
  //     'ED2K': '',
  //     'BoatCloud': '',
  //     'Extend': []
  //   },
  //   {
  //     'Meta': {
  //       'name': 'debian-8.11.1-armel-CD-1.iso',
  //       'architecture': 'armel',
  //       'description': MetaList['8.11'].description,
  //       'size': 'unknown',
  //       'at_date': '2021-10-13 22:19',
  //       'up_date': '2021-10-13 22:19'
  //     },
  //     'Direct': '',
  //     'BitTorrent': 'https://cdimage.debian.org/cdimage/archive/8.11.1/armel/bt-cd/debian-8.11.1-armel-CD-1.iso.torrent',
  //     'ED2K': '',
  //     'BoatCloud': '',
  //     'Extend': []
  //   },
  //   {
  //     'Meta': {
  //       'name': 'debian-8.11.1-armhf-CD-1.iso',
  //       'architecture': 'armhf',
  //       'description': MetaList['8.11'].description,
  //       'size': 'unknown',
  //       'at_date': '2021-10-13 22:19',
  //       'up_date': '2021-10-13 22:19'
  //     },
  //     'Direct': '',
  //     'BitTorrent': 'https://cdimage.debian.org/cdimage/archive/8.11.1/armhf/bt-cd/debian-8.11.1-armhf-CD-1.iso.torrent',
  //     'ED2K': '',
  //     'BoatCloud': '',
  //     'Extend': []
  //   },
  //   {
  //     'Meta': {
  //       'name': 'debian-8.11.1-i386-CD-1.iso',
  //       'architecture': 'i386',
  //       'description': MetaList['8.11'].description,
  //       'size': 'unknown',
  //       'at_date': '2021-10-13 22:19',
  //       'up_date': '2021-10-13 22:19'
  //     },
  //     'Direct': '',
  //     'BitTorrent': 'https://cdimage.debian.org/cdimage/archive/8.11.1/i386/bt-cd/debian-8.11.1-i386-CD-1.iso.torrent',
  //     'ED2K': '',
  //     'BoatCloud': '',
  //     'Extend': []
  //   },
  //   {
  //     'Meta': {
  //       'name': 'debian-8.11.1-amd64-i386-netinst.iso',
  //       'architecture': 'multi-arch',
  //       'description': MetaList['8.11'].description,
  //       'size': 'unknown',
  //       'at_date': '2021-10-13 22:19',
  //       'up_date': '2021-10-13 22:19'
  //     },
  //     'Direct': '',
  //     'BitTorrent': 'https://cdimage.debian.org/cdimage/archive/8.11.1/multi-arch/bt-cd/debian-8.11.1-amd64-i386-netinst.iso.torrent',
  //     'ED2K': '',
  //     'BoatCloud': '',
  //     'Extend': []
  //   },
  //   {
  //     'Meta': {
  //       'name': 'debian-8.11.0-arm64-CD-1.iso.torrent',
  //       'architecture': 'arm64',
  //       'description': MetaList['8.11'].description,
  //       'size': 'unknown',
  //       'at_date': '2021-10-13 22:19',
  //       'up_date': '2021-10-13 22:19'
  //     },
  //     'Direct': '',
  //     'BitTorrent': 'https://cdimage.debian.org/cdimage/archive/8.11.0/arm64/bt-cd/debian-8.11.0-arm64-CD-1.iso.torrent',
  //     'ED2K': '',
  //     'BoatCloud': '',
  //     'Extend': []
  //   },
  //   {
  //     'Meta': {
  //       'name': 'debian-8.11.0-mips-CD-1.iso.torrent',
  //       'architecture': 'mips',
  //       'description': MetaList['8.11'].description,
  //       'size': 'unknown',
  //       'at_date': '2021-10-13 22:19',
  //       'up_date': '2021-10-13 22:19'
  //     },
  //     'Direct': '',
  //     'BitTorrent': 'https://cdimage.debian.org/cdimage/archive/8.11.0/mips/bt-cd/debian-8.11.0-mips-CD-1.iso.torrent',
  //     'ED2K': '',
  //     'BoatCloud': '',
  //     'Extend': []
  //   },
  //   {
  //     'Meta': {
  //       'name': 'debian-8.11.0-mipsel-CD-1.iso.torrent',
  //       'architecture': 'mipsel',
  //       'description': MetaList['8.11'].description,
  //       'size': 'unknown',
  //       'at_date': '2021-10-13 22:19',
  //       'up_date': '2021-10-13 22:19'
  //     },
  //     'Direct': '',
  //     'BitTorrent': 'https://cdimage.debian.org/cdimage/archive/8.11.0/mipsel/bt-cd/debian-8.11.0-mipsel-CD-1.iso.torrent',
  //     'ED2K': '',
  //     'BoatCloud': '',
  //     'Extend': []
  //   },
  //   {
  //     'Meta': {
  //       'name': 'debian-8.11.0-powerpc-CD-1.iso.torrent',
  //       'architecture': 'powerpc',
  //       'description': MetaList['8.11'].description,
  //       'size': 'unknown',
  //       'at_date': '2021-10-13 22:19',
  //       'up_date': '2021-10-13 22:19'
  //     },
  //     'Direct': '',
  //     'BitTorrent': 'https://cdimage.debian.org/cdimage/archive/8.11.0/powerpc/bt-cd/debian-8.11.0-powerpc-CD-1.iso.torrent',
  //     'ED2K': '',
  //     'BoatCloud': '',
  //     'Extend': []
  //   },
  //   {
  //     'Meta': {
  //       'name': 'debian-8.11.0-ppc64el-CD-1.iso.torrent',
  //       'architecture': 'ppc64el',
  //       'description': MetaList['8.11'].description,
  //       'size': 'unknown',
  //       'at_date': '2021-10-13 22:19',
  //       'up_date': '2021-10-13 22:19'
  //     },
  //     'Direct': '',
  //     'BitTorrent': 'https://cdimage.debian.org/cdimage/archive/8.11.0/ppc64el/bt-cd/debian-8.11.0-ppc64el-CD-1.iso.torrent',
  //     'ED2K': '',
  //     'BoatCloud': '',
  //     'Extend': []
  //   },
  //   {
  //     'Meta': {
  //       'name': 'debian-8.11.0-s390x-CD-1.iso.torrent',
  //       'architecture': 's390x',
  //       'description': MetaList['8.11'].description,
  //       'size': 'unknown',
  //       'at_date': '2021-10-13 22:19',
  //       'up_date': '2021-10-13 22:19'
  //     },
  //     'Direct': '',
  //     'BitTorrent': 'https://cdimage.debian.org/cdimage/archive/8.11.0/s390x/bt-cd/debian-8.11.0-s390x-CD-1.iso.torrent',
  //     'ED2K': '',
  //     'BoatCloud': '',
  //     'Extend': []
  //   },
  // ]
}


for (const itemKey in MetaList) {
  const item = MetaList[itemKey]
  const distribution = `${item.version} ${item.name}`
  CD[distribution] = []
  for (const architecture of architectureList) {
    console.log(architecture)
    CD[distribution].push({
      'Meta': {
        'name': `debian-${item.version}-${architecture}-CD-1.iso`,
        'architecture': 'amd64',
        'description': item.description,
        'size': item.size ? item.size : 'unknown',
        'at_date': item.at_date ? item.at_date : '2021-10-13 22:19',
        'up_date': item.at_date ? item.at_date : '2021-10-13 22:19',
      },
      'Direct': `https://cdimage.debian.org/cdimage/archive/${item.version}/amd64/iso-cd/`,
      'BitTorrent': `https://cdimage.debian.org/cdimage/archive/${item.version}/amd64/bt-cd/`,
      'ED2K': '',
      'BoatCloud': '',
      'Extend': []
    },)
  }


}
export default CD

