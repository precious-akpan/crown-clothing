import Directory from "../../components/directory/Directory";

function Homepage() {
  return (
    <div className={"homepage"}>
      <div className="directory-menu">
        <Directory />
      </div>
    </div>
  );
}

export default Homepage;