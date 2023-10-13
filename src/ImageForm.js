import { useState } from "react";
import { useNavigate } from "react-router-dom";


function ImageForm({ upload }) {
  const initialFormData = {
    title: "",
    keyword1: "",
    keyword2: "",
    keyword3: ""
  };
  const [formData, setFormData] = useState(initialFormData);
  const [file, setFile] = useState("");

  const navigate = useNavigate();


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

  async function handleSubmit(evt) {
    evt.preventDefault();
    const formInput = new FormData();
    formInput.append("file", file);
    for (const [name, value] of Object.entries(formData)) {
      formInput.append(name, value);
    }
    const image = await upload(formInput);
    navigate(`/image/${image.id}/edit`);
  }

  return (
    <form className="ImageForm" onSubmit={handleSubmit}>
      <input onChange={handleFile}
        name="file"
        type="file"
        value=""
        className="file-field" />
      <input onChange={handleChange}
        name="title"
        value={formData.title}
        className="title-field"
        placeholder="title" />
      <input onChange={handleChange}
        name="keyword1"
        value={formData.keyword1}
        className="keyword=field"
        placeholder="keyword" />
      <input onChange={handleChange}
        name="keyword2"
        value={formData.keyword2}
        className="keyword=field"
        placeholder="keyword" />
      <input onChange={handleChange}
        name="keyword3"
        value={formData.keyword3}
        className="keyword=field"
        placeholder="keyword" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ImageForm;