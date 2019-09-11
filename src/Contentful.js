import { createClient } from "contentful";

export default createClient({
  space: process.env.REACT_APP_DREAM_HOME_API_SPACE,
  accessToken: process.env.REACT_APP_DREAM_HOME_ACCESS_TOKEN
});
