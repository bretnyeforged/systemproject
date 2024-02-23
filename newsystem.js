const Main = () => {
  const [sensors, setSensors] = useState([]);
  const [sensorInFocus, setSensorInFocus] = useState();
  useEffect(() => {
    getSensors()
  }, [setSensors])

  const getSensors = () => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/sensors`)
      .then(res => res.json())
      .then(
        async (sensors) => {
          setSensors(sensors)
          setSensorInFocus(sensors[0])
        },
        (error) => {
          console.log(`Coudn't fetch data. Error: ${error}`)
        }
      )
  }
//java script 
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

@font-face {
  font-family: 'IBM Plex Mono';
  src: local('IBM Plex Mono'),
    url('./assets/IBM_Plex_Mono/IBMPlexMono-Medium.ttf') format('woff');
}
@font-face {
  font-family: 'IBM Plex Mono';
  src: local('IBM Plex Mono'),
    url('./assets/IBM_Plex_Mono/IBMPlexMono-Bold.ttf') format('woff');
  font-weight: bold;
}
  //yes
