function getHeaders() {
  return {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "x-hasura-admin-secret": '2vv9weFv'
  }
}

function query(query, variables) {
  return new Promise((resolve, reject) => {
    request(query, variables).then(response => {
      if (response.status == 200) {
        response.json().then(resolve);
      } else {
        response.json().then(reject);
      }
    }).catch(reject);
  });
}

function request(query, variables) {
  return fetch('https://lahabannamensclub.com/api/v1/graphql', {
    method: "POST",
    headers: getHeaders(),
    body: setBody(query, variables),
  });
}

function setBody(query, variables) {
  return JSON.stringify({ query, variables });
}

export default {
  query
}