export interface ArchMeta {
  isoSuffix: string,
  size: string
}


export interface DebianMeta {
  version: string,
  name: string,
  description: string,
  size?: string,
  at_date?: string
  up_date?: string
  isoSuffix?: string,
  archExtendMeta?: {
    amd64: ArchMeta,
    arm64?: ArchMeta,
    armel?: ArchMeta,
    i386?: ArchMeta,
    mips?: ArchMeta,
    mips64el?: ArchMeta,
    mipsel?: ArchMeta,
    ppc64el?: ArchMeta,
    s390x?: ArchMeta,
    'multi-arch'?: ArchMeta

  }
}

export  type DebianMetaSetIF = Record<string, DebianMeta>


const MetaList: DebianMetaSetIF = {
  '11.1': {
    name: 'bullseye',
    version: '11.1.0',
    description: 'Debian 11.2 已于 2021年12月18日 发布。Debian 11.0 最初发布于 2021年08月14日。',
    at_date: '2021年12月18日',
    isoSuffix: 'netinst',
    archExtendMeta: {
      amd64: {
        isoSuffix: 'netinst',
        size: '320M'
      }
    }
  },
  '10.11': {
    name: 'buster',
    version: '10.11.0',
    description: 'Debian 10.11 已于2021年10月09日发布。Debian 10.0 最初发布于2019年07月06日。此次发行包含了许多重要的改变，在我们的新闻稿与发行说明有详细的说明。\n' +
      '\n' +
      'Debian 10 已被 Debian 11（bullseye）取代。\n' +
      '\n',
    at_date: '2021年10月09日',
    isoSuffix: 'netinst'
  },
  '9.13': {
    name: 'stretch',
    version: '9.13.0',
    isoSuffix: 'netinst',
    at_date: '2017年06月17日',
    up_date: '2020年07月18日',
    description: 'Debian 9.13 已于2020年07月18日发布。Debian 9.0 最初发布于2017年06月17日。此次发行包含了许多重要的改变，在我们的新闻稿与发行说明有详细的说明。\n' +
      '\n' +
      'Debian 9 已被 Debian 10（buster）取代。安全更新自 2020年07月06日 起已终止。\n' +
      '\n' +
      '然而，直到2022年6月底前，stretch 可以获得长期支持（LTS）。LTS 仅限于 i386、amd64、armel、armhf 和 arm64。stretch 除此以外的所有体系架构已不再受到支持'
  },

  '8.11': {
    name: 'jessie',
    version: '8.11.0',
    description: 'Debian 9.13 已于2018年06月23日发布。' +
      'Debian 8.0 最初发布于2015年04月26日。Debian 8 已被 Debian 9（stretch）取代。常规安全更新支持已于 2018年06月17日 停止。' +
      '然而，直到2022年6月底前，stretch 可以获得长期支持（LTS）。LTS 仅限于 i386、amd64、armel、armhf 和 arm64。stretch 除此以外的所有体系架构已不再受到支持。',
  },

}
export default MetaList
