const apiKey = 'c1e2a24742f64211844e5d6342adcf1a';

export default class Model {
  constructor() {
    this.lastPage = 8;
    this.lastShownPage = 0;
    this.lastRequest = '';
  }

  loadData(query, func) {
    if (!query) {
      query = this.lastRequest;
    } else {
      this.lastRequest = query;
    }
    this.lastShownPage++;
    const url = `https://newsapi.org/v2/${query}&pageSize=5&page=${this.lastShownPage}&apiKey=${apiKey}`;
    const request = new Request(url);
    fetch(request).then((response) => response.json()).then((myJson) => func(myJson));
  }
}
