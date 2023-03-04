import {User} from './User'
import {Company} from './Company'
import { CustomMap } from './CustomMap'

const user = new User()
const company = new Company()

const customMap = new CustomMap('mapContainer')
customMap.addMarker(user)
customMap.addMarker(company)

console.log(user)
console.log(company)
