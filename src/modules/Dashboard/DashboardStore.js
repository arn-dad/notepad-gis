import { makeAutoObservable, runInAction } from "mobx";
import rootStoreUI from "stores/RootStoreUI";
import api from '@services/api';
import { httpErrorHandler } from '@utilities/httpHandlers/httpErrorHandler';
import durationDiff from '@utilities/dates/durationDiff';

class DashboardStore {
  chartData = this.generateChartData([], { label: 'Created Gists' });
  fileChartData = this.generateChartData([], { label: 'Created Gists files' });

  dataPage = 0;
  filePage = 0;

  constructor() {
    makeAutoObservable(this)
  }

  async getGistsPublicList() {
    rootStoreUI.startProgress();
    try {
      this.dataPage = this.dataPage + 1;
      const response = await api.notepad.getGistsPublicList({ params: { page: this.dataPage, per_page: 30 } });
      const data = this.transformGists(response.data);

      const chart = this.generateChartData([...this.chartData.datasets[0].data, ...data], { label: 'Created Gists' });
      runInAction(() => { this.chartData = chart });
      console.log("getGistsPublicList ~ response", response);
    } catch (error) {
      const { message } = httpErrorHandler(error);
      rootStoreUI.openAlert({ severity: 'warning', message });
    } finally {
      rootStoreUI.endProgress();
    }
  }

  async getGistsDateFilesRange() {
    rootStoreUI.startProgress();
    try {
      this.filePage = this.filePage + 1;
      const response = await api.notepad.getGistsPublicList({ params: { page: this.filePage, per_page: 30 } });
      const files = this.transformGitsFiles(response.data);
      const chart = this.generateChartData([...this.fileChartData.datasets[0].data, ...files], { label: 'Created Gists files' });
      runInAction(() => { this.fileChartData = chart });
      console.log("getGistsDateFilesRange ~ response", response);
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

  transformGitsFiles(gists) {
    const data = [0];
    let currentDate = gists[0].created_at;

    for (let i = 0; i < gists.length; i++) {
      const diff = durationDiff(currentDate, gists[i].created_at).asSeconds();
      const filesCount = Object.keys(gists[i].files).length;
      if(diff <= 5) {
        data[data.length - 1] = data[data.length - 1] + filesCount;
      } else {
        currentDate = gists[i].created_at;
        data.push(filesCount);
      }
    }
    return data;
  }

  generateChartData(data, { label }) {
    return {
      labels: data,
      datasets: [
        {
          label,
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
    this.chartData = this.generateChartData([], { label: 'Created Gists' });
    this.fileChartData = this.generateChartData([], { label: 'Created Gists files' });

    this.dataPage = 0;
    this.filePage = 0;

  }
}

export default new DashboardStore();