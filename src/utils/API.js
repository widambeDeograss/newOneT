import axios from "axios";
import { Config } from "./Config";
// import {message} from "antd";
// import {EDIT_POS_TYPE} from "./constants";
// import {snackbarRef} from "../App";
// import { setAuthToken } from '../features/userSlice'
// import { useDispatch } from 'react-redux'

function performRequest(
  method,
  payload,
  authenticated = true,
  isLogoutRequest = false
) {
  // const auth = store && store.getState().auth;
  // const authHeaders = authenticated && auth && auth.session ? {
  //   'Authorization': 'Bearer ' + auth.session.token
  // } : {};

  return new Promise((resolve, reject) => {
    // const headers = {
    //   'Content-Type': 'application/json',
    //   'X-API-Method': method,
    //   'X-UI-Language': getLanguageCode(i18n.languages),
    //   ...authHeaders
    // };
    // const data = JSON.stringify(payload);

    axios
      .post(Config.apiURL + method, payload)
      .then((response) => {
        if ("x-refreshed-token" in response.headers) {
          // useDispatch(setAuthToken(response.headers['x-refreshed-token']))
        }
        resolve(response.data);
      })
      .catch((error) => {
        if (!error.response) {
          message
            .error("No network available, Please Connect to a Network!")
            .then();
        } else if (error.response.status === 401) {
          // store && logOut(store.dispatch);
          // enqueueSnackbar('Error occured', {variant: 'warning'});
          // snackbarRef.enqueueSnackbar(error.response.data, {variant: 'error'})
        } else if (error.response.status === 400) {
          // store && logOut(store.dispatch);
          // enqueueSnackbar('Error occured', {variant: 'warning'}
          // console.log(error.response.data)
          // message.error(error.response.data, 5).then()
          // snackbarRef.enqueueSnackbar(error.response.data, {variant: 'error'})
        } else if (error.response && error.response.status === 429) {
          // if (snackbarRef) {
          // //   snackbarRef.enqueueSnackbar(i18n.t('common.rateLimitExceeded'), { variant: 'error' });
          // }
        } else {
          // store && logOut(store.dispatch);
          // enqueueSnackbar('Error occured', {variant: 'warning'}
          console.log("Error occurred, status: " + error.response.status);
          // snackbarRef.enqueueSnackbar("Unknown error", {variant: 'error'})
          return;
        }
        console.log(error);
        reject(error);
      });
  });
}

export function loginRequest(
  email,
  password,
  pos,
  rememberMe = false,
  mfaCode = ""
) {
  const additional = {};
  if (mfaCode !== "") {
    additional.mfaCode = mfaCode;
  }
  return performRequest(
    "api/auth/operator-login",
    {
      username: email,
      password: password,
      pos_office_id: JSON.parse(localStorage.getItem("app_license")).office.id,
    },
    false
  );
}

function performAuthenticatedGetRequest(
  method,
  authenticated = true,
  isLogoutRequest = false
) {
  return new Promise((resolve, reject) => {
    axios
      .get(Config.apiURL + method, {
        headers: {
          Authorization: "Token " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (!error.response) {
          message
            .error("No network available, Please Connect to a Network!")
            .then();
        } else if (
          error.response &&
          error.response.status === 401 &&
          authenticated &&
          !isLogoutRequest
        ) {
          // store && logOut(store.dispatch);
          // return
        } else if (error.response && error.response.status === 429) {
          // if (snackbarRef) {
          //   snackbarRef.enqueueSnackbar(i18n.t('common.rateLimitExceeded'), { variant: 'error' });
          // }
        }
        reject(error);
      });
  });
}

function performAuthenticatedPostRequest(
  method,
  payload,
  authenticated = true,
  isLogoutRequest = false
) {
  return new Promise((resolve, reject) => {
    axios
      .post(Config.apiURL + method, payload, {
        headers: {
          Authorization: "Token " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.status === 401 &&
          authenticated &&
          !isLogoutRequest
        ) {
          // store && logOut(store.dispatch);
          return;
        }
        if (error.response && error.response.status === 429) {
          // if (snackbarRef) {
          //   snackbarRef.enqueueSnackbar(i18n.t('common.rateLimitExceeded'), { variant: 'error' });
          // }
        }
        reject(error);
      });
  });
}

function performAuthenticatedPutRequest(
  method,
  payload,
  authenticated = true,
  isLogoutRequest = false
) {
  return new Promise((resolve, reject) => {
    axios
      .put(Config.apiURL + method, payload, {
        headers: {
          Authorization: "Token " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.status === 401 &&
          authenticated &&
          !isLogoutRequest
        ) {
          // store && logOut(store.dispatch);
          return;
        }
        if (error.response && error.response.status === 429) {
          // if (snackbarRef) {
          //   snackbarRef.enqueueSnackbar(i18n.t('common.rateLimitExceeded'), { variant: 'error' });
          // }
        }
        reject(error);
      });
  });
}

function performAuthenticatedDeleteRequest(
  method,
  authenticated = true,
  isLogoutRequest = false
) {
  return new Promise((resolve, reject) => {
    axios
      .delete(Config.apiURL + method, {
        headers: {
          Authorization: "Token " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.status === 401 &&
          authenticated &&
          !isLogoutRequest
        ) {
          // store && logOut(store.dispatch);
          return;
        }
        if (error.response && error.response.status === 429) {
          // if (snackbarRef) {
          //   snackbarRef.enqueueSnackbar(i18n.t('common.rateLimitExceeded'), { variant: 'error' });
          // }
        }
        reject(error);
      });
  });
}

// POS RESOURCES
export function licensePOSRequest(key) {
  return performRequest("api/v1/license-pos", {
    key: key,
  });
}
export function editPosTypeRequest(id, data) {
  return performAuthenticatedPutRequest(
    "api/v1/pos/" + id + "?func=" + EDIT_POS_TYPE,
    data
  );
}

export function deletePOSRequest(id, apos_id = null) {
  let method = "api/v1/pos/" + id;
  if (apos_id != null) {
    method = method + "?apos_id=" + apos_id;
  }
  return performAuthenticatedDeleteRequest(method);
}

export function addAPOSRequest(name, office) {
  return performAuthenticatedPostRequest("api/v1/apos", {
    name: name,
    office: office,
  });
}

export function deleteAPOSRequest(id) {
  return performAuthenticatedDeleteRequest("api/v1/apos/" + id);
}

//COUNTERS RESOURCES
export function getCountersRequest() {
  return performAuthenticatedGetRequest("api/v1/list_counters/");
}
export function countersQuerySetRequest(id, type) {
  return performAuthenticatedGetRequest(
    "api/v1/counters_query_set/?" + type + "=" + id
  );
}

//PROVIDERS RESOURCES

export function providersQuerySetRequest(id, type) {
  return performAuthenticatedGetRequest(
    "api/v1/providers_query_set/?" + type + "=" + id
  );
}

export function getProviderByIdRequest(id) {
  return performAuthenticatedGetRequest("api/v1/provider/" + id);
}

export function providerStatusRequest(id, status) {
  return performAuthenticatedPutRequest(
    "api/v1/provider/" + id + "?s=" + status,
    {}
  );
}

export function providerPutRequest(id, status) {
  return performAuthenticatedPutRequest(
    "api/v1/provider/" + id + "?status=" + status,
    {}
  );
}

export function createProviderServiceRequest(provider, service) {
  return performAuthenticatedPostRequest("api/v1/provider-services", {
    service: service,
    provider: provider,
  });
}

export function deleteProviderServiceRequest(provider_id) {
  return performAuthenticatedDeleteRequest(
    "api/v1/provider-service/" + provider_id
  );
}

export function getProviderServicesRequest({
  og = "",
  of = "",
  provider = "",
}) {
  const queryParameters = [
    og ? `og=${og}` : "",
    of ? `of=${of}` : "",
    provider ? `pro=${provider}` : "",
  ]
    .filter(Boolean)
    .join("&");

  const method = `api/v1/list_provider_services/${
    queryParameters ? `?${queryParameters}` : ""
  }`;
  return performAuthenticatedGetRequest(method);
}

// TICKET RESOURCES
export function ticketPutRequest(id, status) {
  return performAuthenticatedPutRequest(
    "api/v1/ticket/" + id + "?status=" + status,
    {}
  );
}
export function pullTicketRequest(provider) {
  return performAuthenticatedPostRequest("api/v1/pull-ticket", {
    provider: provider,
  });
}

export function getPendingTicketsRequest(id) {
  return performAuthenticatedGetRequest("api/v1/tickets?provider=" + id);
}

export function addTicketRequest(service) {
  return performAuthenticatedPostRequest("api/v1/tickets", {
    service: service,
    created_by: JSON.parse(localStorage.getItem("user_id")),
  });
}

export function getTicketFile(ticket) {
  return performAuthenticatedGetRequest("api/v1/ticket/");
}

// SERVICES RESOURCES
export function getServicesRequest() {
  return performAuthenticatedGetRequest("api/v1/list_services/");
}

export function servicesQuerySetRequest({
  of = "",
  og = "",
  search = "",
  not_in_pro = "",
}) {
  const queryParameters = [
    of ? `of=${of}` : "",
    og ? `type=${og}` : "",
    not_in_pro ? `not_in_pro=${not_in_pro}` : "",
    search ? `search=${search}` : "",
  ]
    .filter(Boolean)
    .join("&");

  const method = `api/v1/services_query_set/${
    queryParameters ? `?${queryParameters}` : ""
  }`;
  console.log(method);
  return performAuthenticatedGetRequest(method);
}
