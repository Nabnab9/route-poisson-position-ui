
export class Profile {
  battery: number;
  name: string;

  constructor(profile: any) {
    this.battery = profile.battery;
    this.name = profile.name;
  }
}
