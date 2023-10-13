import ImageEditor from "./ImageEditor";
import ImageForm from "./ImageForm";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";

/** Function to create a list of routes for the BrowserRouter
 *  props: images, upload()
 *  state: none
 *
 *  App -> RoutesList -> {Homepage, ImageEditor, ImageForm}
 */
function RoutesList({ images, upload }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage images={images} />} />
      <Route path="/image/:id/edit" element={<ImageEditor images={images} />} />
      <Route path="/ImageForm" element={<ImageForm upload={upload} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;