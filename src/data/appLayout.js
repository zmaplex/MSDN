const linksList = [
  {
    title: 'Home',
    name: 'home',
    icon: 'home',
    to: {name: 'appSystem', query: {operatingSystem: 'home'}}
  },
  {
    title: 'Windows',
    name: 'Windows',
    icon: 'img:assets/img/windows.svg',
    to: {name: 'appSystem', query: {operatingSystem: 'windows'}}
  },
  {
    title: 'Linux',
    name: 'Linux',
    icon: 'img:assets/img/linux.svg',
    to: {name: 'appSystem', query: {operatingSystem: 'linux'}}
  },

  {
    title: 'Android',
    name: 'Android',
    icon: 'img:assets/img/android.svg',
    to: {name: 'appSystem', query: {operatingSystem: 'android'}}
  },

]

const sourceData = {
  linksList: linksList
}

export default sourceData
