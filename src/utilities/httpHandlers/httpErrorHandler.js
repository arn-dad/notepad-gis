export const httpErrorHandler = function(error) {
  const template = {
    message: 'Something went wrong :(',
    status: 0
  }

  if (error.response) {
    console.warn('Request made and server responded')
    template.message = error.response.data.message;
    template.status = error.response.status
    console.warn('Response data: ', error.response.data);
    console.warn('Response status: ', error.response.status);
    console.warn('Response headers: ', error.response.headers);
  } else if (error.request) {
    console.warn('The request was made but no response was received')
    console.warn('Request', error.request);
  } else {
    console.warn('Something happened in setting up the request that triggered an Error')
    template.message = error.message;
    console.warn('Error', error.message);
  }

  return template;
}