export const httpErrorHandler = function(error) {
  const template = {
    message: 'Something went wrong :(',
    status: 0
  }

  if (error.response) {
    // Request made and server responded
    template.message = error.response.data.message;
    template.status = error.response.status
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    template.message = error.message;
    console.log('Error', error.message);
  }

  return template;
}