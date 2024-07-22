import { useState } from "react";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="text-center">
      <h1 className="fs-2 mb-5">Create Article</h1>
      <div className="w-75 mx-auto">
        <form>
          <Input label={"Title"} state={title} setState={setTitle} />
          <TextArea
            label={"Description"}
            state={description}
            setState={setDescription}
          />
          <TextArea
            label={"Body"}
            state={body}
            setState={setBody}
            height="250px"
          />
          <button className="w-100 btn btn-lg btn-primary mt-2">Create</button>
        </form>
      </div>
    </div>
  );
}

export default CreateArticle;
