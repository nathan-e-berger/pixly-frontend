import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Button, Input, Form, FormGroup, Label, Row } from 'reactstrap';

/** Function renders form for image upload
 * props: upload()
 * state: formData, file
 *
 * App -> RoutesList -> ImageForm
 */
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
    const formInput = new FormData;
    formInput.append("file", file);
    for (const [name, value] of Object.entries(formData)) {
      formInput.append(name, value);
    }
    const image = await upload(formInput);
    navigate(`/image/${image.image.id}/edit`);
  }

  return (
    <Form
      className="m-3"
      onSubmit={handleSubmit}
      encType="multipart/form-data">
      <Row className="align-items-center g-3">
        <Col md={12}>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input onChange={handleChange}
              name="title"
              value={formData.title}
              className="title-field"
              placeholder="Enter title..." />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Label bsSize="sm">
          Keywords
        </Label>
        <Col md={4}>
          <Input onChange={handleChange}
            name="keyword1"
            value={formData.keyword1}
            className="keyword1-field"
            placeholder="Enter keyword..." />
        </Col>
        <Col md={4}>
          <Input onChange={handleChange}
            name="keyword2"
            value={formData.keyword2}
            className="keyword2-field"
            placeholder="Enter keyword..." />
        </Col>
        <Col md={4}>
          <Input onChange={handleChange}
            name="keyword3"
            value={formData.keyword3}
            className="keyword3-field"
            placeholder="Enter keyword..." />
        </Col>
      </Row>
      <Row className="mt-2 row-cols-lg-auto g-3 align-items-center">
        <Col md={6}>
          <Input
            onChange={handleFile}
            name="file"
            type="file"
            value={file.file}
            className="file-field"
            required />
        </Col>
        <Col md={6}>
          <Button
            type="submit"
            block
            color="dark"
            outline
            size="sm">Submit</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ImageForm;