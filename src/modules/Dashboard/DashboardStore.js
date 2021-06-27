import { makeAutoObservable, runInAction } from "mobx";
import rootStoreUI from "stores/RootStoreUI";
import api from '@services/api';
import { httpErrorHandler } from '@utilities/httpHandlers/httpErrorHandler';
import durationDiff from '@utilities/dates/durationDiff';

class DashboardStore {
  gists = [];
  data = [];
  chartData = {};
  per_page = 30;
  page = 0;

  constructor() {
    makeAutoObservable(this)
  }

  async getGistsPublicList() {
    rootStoreUI.startProgress();
    try {
      this.page = this.page + 1;
      const response = await api.notepad.getGistsPublicList({ params: { page: this.page, per_page: this.per_page } });
      const data = this.transformGists(response.data)
      runInAction(() => { this.data = [ ...this.data, ...data ] });
      const chart = this.generateChartData(this.data);
      runInAction(() => { this.chartData = chart });
      console.info("getGistsPublicList ~ response", this.data.length);
    } catch (error) {
      const { message } = httpErrorHandler(error);
      rootStoreUI.openAlert({ severity: 'warning', message });
    } finally {
      rootStoreUI.endProgress();
    }
  }

  transformGists(gists) {
    const data = [0];
    let currentDate = gists[0].created_at;
    
    for (let i = 0; i < gists.length; i++) {
      const diff = durationDiff(currentDate, gists[i].created_at).asSeconds();
      if(diff <= 5) {
        data[data.length - 1] = data[data.length - 1] + 1;
      } else {
        currentDate = gists[i].created_at;
        data.push(1);
      }
    }
    return data;
  }

  generateChartData(data) {
    return {
      labels: data,
      datasets: [
        {
          label: 'Gists Created',
          data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }
  }
 
  reset() {
    this.gists = [];
    this.data = [];
    this.chartData = {};
    this.per_page = 30;
    this.page = 0;
  }
}

export default new DashboardStore();