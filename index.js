const requestUrl = "https://jsonplaceholder.typicode.com/users";
const secondRequestUrl = 'https://jsonplaceholder.typicode.com/todos/';
function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = () => {
      (xhr.status >= 400) ?
        reject(console.log(xhr.response)) :
        resolve(console.log(xhr.response));
    }
    xhr.onerror = () => {
      reject(xhr.response);
    }
    xhr.send();
  });
}
sendRequest("GET", requestUrl)
  .then(sendRequest("GET", secondRequestUrl)
    .then(res = () => { console.log("Оба ответа получены") }
    ))
  .catch(err => console.error('Error', err))
