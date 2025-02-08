class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    console.log(this.apiKey);
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
  }

  async postComment(comment) {
    try {
      const URL = `${this.baseUrl}comments?api_key=${this.apiKey}`;
      const response = await axios.post(URL, comment, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getComments() {
    try {
      console.log("Here");
      const URL = `${this.baseUrl}comments?api_key=${this.apiKey}`;
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default BandSiteApi;
