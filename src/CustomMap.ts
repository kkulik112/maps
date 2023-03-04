/// <reference types="@types/google.maps" />

interface Mappable {
  location: {
    lat: number,
    lng: number
  }
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.querySelector(`#${divId}`) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mappable: Mappable): void {
    const {lat, lng} = mappable.location
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat,
        lng
      }
    })
  }
}