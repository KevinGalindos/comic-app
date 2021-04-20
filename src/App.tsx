import { Loading } from "./components/Loading";
import { Content } from "./components/Content/Content";

import useFetch from "./utils/hooks/useFetch";

//random between 1 and 2450
const comic = Math.floor(Math.random() * 2450 + 1);

const App = () => {
  //const { result, loading } = useFetch(`https://xkcd.com/${comic}/info.0.json`);
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
    `https://xkcd.com/${comic}/info.0.json`
  )}`;
  const { result, loading } = useFetch(url);
  return loading ? <Loading /> : <Content data={JSON.parse(result.contents)} />;
};

export default App;
