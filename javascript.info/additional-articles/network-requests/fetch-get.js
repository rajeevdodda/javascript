let promiseJSON = fetch("http://127.0.0.1:8000/users");
let promiseText = fetch("http://127.0.0.1:8000/users");
let promiseBlob = fetch("http://127.0.0.1:8000/users");
// let promiseFormData = fetch("http://127.0.0.1:8000/user-form", {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// });

// json() method
promiseJSON
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data, typeof data);
  });

// text() method
promiseText
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data, typeof data);
  });

// formData() method
// promiseFormData
//   .then((response) => {
//     console.log(response.headers);
//     return response.formData();
//   })
//   .then((data) => {
//     console.log(data, typeof data);
//   });

// blob() method
promiseBlob
  .then((response) => {
    return response.blob();
  })
  .then((data) => {
    console.log(data, typeof data);
    data.text().then((text) => {
      console.log(text);
    });
  });
