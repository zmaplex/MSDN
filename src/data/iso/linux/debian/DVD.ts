import {OSVersionIF} from 'src/data/iso';
import MetaList, {DebianMeta} from 'src/data/iso/linux/debian/meta';


const architectureList = ['amd64', 'arm64', 'armel', 'armhf', 'i386', 'mips', 'mips64el', 'mipsel', 'ppc64el', 's390x',]


function getSize(item: DebianMeta, architecture: string): string {
  if (item.archExtendMeta) {
    if (item.archExtendMeta.hasOwnProperty(architecture) && architecture !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
      return eval('item.archExtendMeta' + `.
      ${architecture}`).size
    } else {
      return 'unknown'
    }
  } else {
    return 'unknown'
  }
}

function getFileName(item: DebianMeta, architecture: string): string {
  let filename = `debian-${item.version}-${architecture}-DVD-1.iso`

  if (architecture === 'multi-arch') {
    filename = `debian-${item.version}-amd64-i386-netinst.iso`
  }
  return filename
}


function getOSVersion(obj: OSVersionIF, imgageType: string) {

  const url = 'https://cdimage.debian.org/cdimage/archive/'
  for (const itemKey in MetaList) {
    const item = MetaList[itemKey]
    const distribution = `${item.version} ${item.name}`
    obj[distribution] = []
    for (const architecture of architectureList) {
      obj[distribution].push({
        'Meta': {
          'name': getFileName(item, architecture),
          'architecture': `${architecture}`,
          'description': item.description,
          'size': getSize(item, architecture),
          'at_date': item.at_date ? item.at_date : '2021-10-13 22:19',
          'up_date': item.up_date ? item.up_date : item.at_date ? item.at_date : '2021-10-13 22:19',
        },
        'Direct': url + `${item.version}/${architecture}/iso-${imgageType}/${getFileName(item, architecture)}`,
        'BitTorrent': url + `${item.version}/${architecture}/bt-${imgageType}/${getFileName(item, architecture)}.torrent`,
        'ED2K': '',
        'BoatCloud': '',
        'Extend': []
      },)
    }
  }
}

const DVD: OSVersionIF = {}
getOSVersion(DVD, 'dvd')
export default DVD

