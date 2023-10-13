import ImageEditor from "./ImageEditor";
import ImageForm from "./ImageForm";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";

function RoutesList({ images, upload }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage images={images} />} />
      <Route path="/ImageEditor" element={<ImageEditor images={images} />} />
      <Route path="/image/:id/edit" element={<ImageEditor images={images} />} />
      <Route path="/ImageForm" element={<ImageForm upload={upload} />} />
    </Routes>
  );
}

export default RoutesList;