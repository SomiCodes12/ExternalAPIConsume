import { useEffect, useState } from "react";
import Card from "./Card";
import { searchYouTubeAPI } from "../api/APIs";

const HomePage = () => {
  const [state, setState] = useState<Array<{}>>([]);

  useEffect(() => {
    setState(JSON.parse(localStorage.getItem("youTube")!));
  }, [state]);
  return (
    <div className="p-3 justify-center flex flex-wrap">
      {state?.map((props: any) => (
        <Card props={props} />
      ))}
    </div>
  );
};

export default HomePage;
