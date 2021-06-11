const isPROD = true;
export const DEMO_URL = 'https://api.demo.co-vin.in/api';
export const PROD_URL = 'https://cdn-api.co-vin.in/api';
export const API_VERSION = 'v2';
// const PUBLIC = '/public/';
const BASE_URL = isPROD ? PROD_URL : DEMO_URL;

export const BOOKING_URL = 'appointment/schedule';
export const BENEFICIARIES_URL = 'appointment/beneficiaries';
export const GET_CALENDAR_BY_DISTRICT =
    'appointment/sessions/calendarByDistrict';
export const GET_CALENDAR_BY_PIN = 'appointment/sessions/calendarByPin';
export const CAPTCHA_URL = 'auth/getRecaptcha';
export const OTP_PUBLIC_URL = 'auth/public/generateOTP';
export const OTP_PRO_URL = 'auth/generateMobileOTP';

export const GET_STATES = 'admin/location/states';
export const GET_DISTRICTS = 'admin/location/districts';

const API_HEADERS = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Joplin/1.0',
    },

};

const callAPI = (endpoint: string) => {
    return fetch(`${BASE_URL}/${API_VERSION}/${endpoint}`, API_HEADERS)
        .then(data => {
            console.log(data.status);
            return data.json();
        })
        .catch(e => console.log(e));
};

export const fetchStates = () => {
    ///v2/admin/location/states
    return callAPI(GET_STATES);
};

export const fetchDistricts = (state_id: string) => {
    ///v2/admin/location/districts/{state_id}
    return callAPI(`${GET_DISTRICTS}/${state_id}`);
};

export const getCenterByLatLong = () => {
    ///v2/appointment/centers/public/findByLatLong
};

export const fetchSessionsByDistrict = () => {
    ///v2/appointment/sessions/public/findByDistrict
};

export const fetchSessionsByPin = () => {
    ///v2/appointment/sessions/public/findByPin
};

export const fetchSessionsCalendarByDistrict = (
    districtId: string,
    date: string,
) => {
    ///v2/appointment/sessions/public/calendarByDistrict
    return callAPI(
        `${GET_CALENDAR_BY_DISTRICT}?district_id=${districtId}&date=${date}`,
    );
};

export const fetchSessionsCalendarByPin = (pin: string, date: string) => {
    ///v2/appointment/sessions/public/calendarByPin
    return callAPI(`${GET_CALENDAR_BY_PIN}?pincode=${pin}&date=${date}`);
};

export const fetchSessionsCalendarByCenter = () => {
    ///v2/appointment/sessions/public/calendarByCenter
};

export const fetchBeneficiaries = () => {
    ///v2/appointment/beneficiaries
};

export const setVaccineSchedule = () => {
    ///v2/appointment/schedule
};

export const setVaccineReschedule = () => {
    ///v2/appointment/reschedule
};

export const cancelVaccineSchedule = () => {
    ///v2/appointment/cancel
};
