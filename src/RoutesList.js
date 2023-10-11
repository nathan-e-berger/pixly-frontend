import ImageEditor from "./ImageEditor";
import ImageForm from "./ImageForm";

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/ImageEditor" element={<ImageEditor />} />
      <Route path="/ImageForm" element={<ImageForm />} />
    </Routes>
  );
}

export default RoutesList;