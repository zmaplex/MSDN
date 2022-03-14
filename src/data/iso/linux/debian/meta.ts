export interface DebianMeta {
  version: string,
  name: string,
  description: string,
  size?: string,
  at_date?: string
}

export  type DebianMetaSetIF = Record<string, DebianMeta>


const MetaList: DebianMetaSetIF = {
  '10.11': {
    name: 'buster',
    version: '10.11.0',
    description: 'Debian 10.11 已于2021年10月09日发布。Debian 10.0 最初发布于2019年07月06日。此次发行包含了许多重要的改变，在我们的新闻稿与发行说明有详细的说明。\n' +
      '\n' +
      'Debian 10 已被 Debian 11（bullseye）取代。\n' +
      '\n'
  },
  '9.13': {
    name: 'stretch',
    version: '9.13.0',
    description: 'Debian 9.13 于 2020 年 7 月 18 日发布。Debian 9.0 于 2017 年 6 月 17 日首次发布。该版本包括我们的 新闻稿和 发行说明中描述的许多重大更改。\n' +
      '\n' +
      'Debian 9 已被 Debian 10 ( buster )取代。安全更新已于 2020 年 7 月 6 日完成。\n' +
      '\n' +
      '但是，在 2022 年 6 月之前，长期支持 (LTS) 的延展性受益。LTS 仅限于 i386、amd64、armel、armhf 和 arm64。拉伸不再支持所有其他架构。'
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
