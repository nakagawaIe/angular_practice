export interface IForecastItem {
  clouds: {
    /** 曇り度 */
    all: number;
  };
  /** 予測時刻(UTC) */
  dt: number;
  main: {
    /** 湿度 */
    humidity: number;
    /** 温度 */
    temp: number;
    /** 最高気温 */
    temp_max: number;
    /** 最低気温 */
    temp_min: number;
  };
  /** 降水確率 */
  pop: number;
  sys: {
    /** 昼か夜か */
    pod: 'n' | 'd';
  };
  weather: [
    {
      description: string;
      icon: string;
      id: number;
      main: string;
    },
  ];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}
