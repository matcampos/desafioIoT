export class UserInfoModel {
    email: string;
    username: string;
    firstName: string;
    lastName: string;

    constructor() {
        this.email = "";
        this.username = "";
        this.firstName = "";
        this.lastName = "";
    }


    loadInfoOffice365(userInfo: any) {
        let profile = userInfo.profile;
        let firstName = "";

        if (profile.name !== undefined && profile.name != "") {
            firstName = profile.name.split(' ')[0];
        }
        else if (profile.given_name !== undefined && profile.given_name != "") {
            firstName = profile.given_name.split(' ')[0];
        }

        this.firstName = firstName;
        this.lastName = profile.family_name;
        this.email = userInfo.username;
        this.username = userInfo.username;
    }
}