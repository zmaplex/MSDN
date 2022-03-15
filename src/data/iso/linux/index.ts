import ubuntu from 'src/data/iso/linux/ubuntu';
import {DistributionIF} from 'src/data/iso';
import netInstall from 'src/data/iso/linux/debian/netInstall';
import CD from 'src/data/iso/linux/debian/CD';
import DVD from 'src/data/iso/linux/debian/DVD';


const linux: DistributionIF = {
  'ubuntu': ubuntu,
  'debian net': netInstall,
  'debian CD': CD,
  'debian DVD': DVD,
}

export default linux
