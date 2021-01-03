import {Profile} from './profile.model';

export class Position {
  longitude: number;
  latitude: number;
  dateTime: string;
  speed: number;
  profile: Profile;
  battery: number;
  serial: string;
  androidId: string;
  altitude: number;
  precision: number;
  coordinates: google.maps.LatLngLiteral;

  constructor(position: any) {
    this.longitude = position.longitude;
    this.latitude = position.latitude;
    this.dateTime = position.dateTime;
    this.speed = position.speed;
    this.profile = position.profile;
    this.battery = position.battery;
    this.serial = position.serial;
    this.androidId = position.androidId;
    this.altitude = position.altitude;
    this.precision = position.precision;
    this.coordinates = {lat: this.latitude, lng: this.longitude};

  }
}
