const APP_ENV = {
  APIBaseURL: "",
  APIKey: "",
  accessToken: "",
};

{
  const APIBaseURL = process.env.API_BASE_URL;

  if (!APIBaseURL) {
    throw new Error("API_BASE_URL is not set");
  }

  APP_ENV.APIBaseURL = APIBaseURL;

  const APIKey = process.env.API_KEY;

  if (!APIKey) {
    throw new Error("API_KEY is not set");
  }

  APP_ENV.APIKey = APIKey;

  const accessToken = process.env.ACCESS_TOKEN;

  if (!accessToken) {
    throw new Error("ACCESS_TOKEN is not set");
  }

  APP_ENV.accessToken = accessToken;
}

export default APP_ENV;
