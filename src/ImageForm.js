import { useState } from "react-router-dom";


function ImageForm() {
  const initialFormData = {
    title: "",
    keyword1: "",
    keyword2: "",
    keyword3: ""
  };
  const [formData, setFormData] = useState(initialFormData);
  const [file, setFile] = useState();



  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
  }

  function handleFile(evt) {
    setFile(evt.target.files[0]);
  }

  function handleSubmit(formData, file) {
    const formInput = new FormData();
  }

  return (
    <form className="ImageForm" onSubmit={handleSubmit}>
      <input onChange={ }
        name="file"
        type="file"
        value=""
        className="file-field" />
      <input name="title"
        value=""
        className="title-field"
        placeholder="title" />
      <input onChange={handleChange}
        name="keyword1"
        value=""
        className="keyword=field"
        placeholder="keyword" />
      <input onChange={handleChange}
        name="keyword2"
        value=""
        className="keyword=field"
        placeholder="keyword" />
      <input onChange={handleChange}
        name="keyword3"
        value=""
        className="keyword=field"
        placeholder="keyword" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ImageForm;