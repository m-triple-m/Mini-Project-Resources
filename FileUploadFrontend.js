const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };