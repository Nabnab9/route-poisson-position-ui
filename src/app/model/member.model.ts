export class Member {

  phoneNumber: string;
  name: string;

  constructor(member: any) {
    this.phoneNumber = member.phoneNumber;
    this.name = member.name;
  }
}
