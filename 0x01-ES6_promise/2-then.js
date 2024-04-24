export default function handleResponseFromAPI(promise) {
  promise
    .then((result) => result)
    .catch(() => Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
