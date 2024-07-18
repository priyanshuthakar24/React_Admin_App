// googleApiClient.js
import { gapi } from 'gapi-script';

const CLIENT_ID = '179718686281-coec5bdvootuq52mj1otrsguhobh8d3h.apps.googleusercontent.com'
const Calender_Id = 'en.indian#holiday@group.v.calendar.google.com';
const API_KEY = 'AIzaSyCof8G2vvitsnorOhmtDrU0weuSKJoRwSk';
// const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
// const SCOPES = "https://www.googleapis.com/auth/calendar.events.readonly";

// const CLIENT_ID = 'YOUR_CLIENT_ID';
// const API_KEY = 'YOUR_API_KEY';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.events.readonly";

export const initGoogleClient = () => {
    return new Promise((resolve, reject) => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            }).then(() => {
                resolve(gapi);
                console.log('Done')
            }).catch((error) => {
                reject(error);
            });
        });
    });
};

export const signIn = () => {
    return gapi.auth2.getAuthInstance().signIn();
};

export const getAccessToken = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    const currentUser = authInstance.currentUser.get();
    return currentUser.getAuthResponse().access_token;
};
