import ubuntu from 'src/data/iso/linux/ubuntu';
import {DistributionIF} from 'src/data/iso';
import debian from 'src/data/iso/linux/debian';

const linux: DistributionIF = {
  'ubuntu': ubuntu,
  'debian net': debian.debianNetInst,
  'debian CD': debian.debianCD,

}

export default linux
