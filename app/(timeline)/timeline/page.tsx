import Form from "../components/form";
import Search from "../components/search";

const Timeline = () => {
  return (
    <>
      <div className="px-5 pt-5">
        <Search />
      </div>
      <div className="px-5 pt-5">
        <Form />
      </div>
    </>
  );
};

export default Timeline;
