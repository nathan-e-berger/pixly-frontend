import ImageEditor from "./ImageEditor";
import ImageForm from "./ImageForm";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";

function RoutesList({ images }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage images={images} />} />
      <Route path="/ImageEditor" element={<ImageEditor />} />
      <Route path="/image/:id/edit" element={<ImageEditor images={images} />} />
      <Route path="/ImageForm" element={<ImageForm />} />
    </Routes>
  );
}

export default RoutesList;