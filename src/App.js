import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const response = axios.get(
      "https://7kzsh2patg.execute-api.us-east-1.amazonaws.com/default/github-to-lambda-demo/getproducts"
    );
    console.log(response);
  }, []);
  return <div className="app">this is a simple react app</div>;
}

export default App;
