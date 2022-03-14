import {OSVersionIF} from 'src/data/iso';


const debianDescriptionSET = {
  '8.11': 'Debian 9.13 已于2018年06月23日发布。' +
    'Debian 8.0 最初发布于2015年04月26日。Debian 8 已被 Debian 9（stretch）取代。常规安全更新支持已于 2018年06月17日 停止。' +
    '然而，直到2022年6月底前，stretch 可以获得长期支持（LTS）。LTS 仅限于 i386、amd64、armel、armhf 和 arm64。stretch 除此以外的所有体系架构已不再受到支持。'
}

const netInstall: OSVersionIF = {
  'Jessie 8.11 Net': [
    {
      'Meta': {
        'name': 'debian-8.11.1-amd64-netinst.iso',
        'architecture': 'amd64',
        'description': debianDescriptionSET['8.11'],
        'size': '251 MiB',
        'at_date': '2021-10-13 22:19',
        'up_date': '2021-10-13 22:19'
      },
      'Direct': 'https://cdimage.debian.org/cdimage/archive/8.11.1/amd64/iso-cd/debian-8.11.1-amd64-netinst.iso',
      'BitTorrent': '',
      'ED2K': '',
      'BoatCloud': '',
      'Extend': []
    },
    {
      'Meta': {
        'name': 'debian-8.11.1-armel-netinst.iso',
        'architecture': 'armel',
        'description': debianDescriptionSET['8.11'],
        'size': '383 MiB',
        'at_date': '2021-10-13 22:19',
        'up_date': '2021-10-13 22:19'
      },
      'Direct': 'https://cdimage.debian.org/cdimage/archive/8.11.1/armel/iso-cd/debian-8.11.1-armel-netinst.iso',
      'BitTorrent': '',
      'ED2K': '',
      'BoatCloud': '',
      'Extend': []
    },
    {
      'Meta': {
        'name': 'debian-8.11.1-armhf-netinst.iso',
        'architecture': 'armhf',
        'description': debianDescriptionSET['8.11'],
        'size': '262 MiB',
        'at_date': '2021-10-13 22:19',
        'up_date': '2021-10-13 22:19'
      },
      'Direct': 'https://cdimage.debian.org/cdimage/archive/8.11.1/armhf/iso-cd/debian-8.11.1-armhf-netinst.iso',
      'BitTorrent': '',
      'ED2K': '',
      'BoatCloud': '',
      'Extend': []
    },
    {
      'Meta': {
        'name': 'debian-8.11.1-i386-netinst.iso',
        'architecture': 'i386',
        'description': debianDescriptionSET['8.11'],
        'size': '321 MiB',
        'at_date': '2021-10-13 22:19',
        'up_date': '2021-10-13 22:19'
      },
      'Direct': 'https://cdimage.debian.org/cdimage/archive/8.11.1/i386/iso-cd/debian-8.11.1-i386-netinst.iso',
      'BitTorrent': '',
      'ED2K': '',
      'BoatCloud': '',
      'Extend': []
    },
  ],
}

export default netInstall

