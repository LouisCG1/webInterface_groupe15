<template>
  <div class="WeatherWidget">
    <div class="TownSelector">
      <select v-model="town">
        <option value="Toulouse">Toulouse</option>
        <option value="Paris">Paris</option>
      </select>
      <br>
      <button>
        Search
      </button>
    </div>

    <div class="CurrentWeather">
      <h1 class="town">Meteo actuelle à {{town}}</h1>
      <p class="temp">Temperature: {{temp}}°C</p>
      <p class="date">Date: {{humandate}}</p>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';
  import 'moment/locale/fr';

  export default {
    name: 'CurrentWeather',
    props: {
    },
    data: function() {
      moment.locale('fr')
      this.refreshCurrentWeather()
      this.refreshCurrentTown()
      return {
        town: this.$props.town,
        temp: this.$props.temp,
        humandate: moment().format('LL')
      }
    }, 
    methods: {
      refreshCurrentWeather: function() {
        this.$props.temp = Math.floor(Math.random() * 1000 % 400) / 10
      },
      refreshCurrentTown: function() {
        let town = this.$route.params.town ? this.$route.params.town : "Paris"
        console.log(`town: ` + this.$route.params.town)
        this.$props.town = town
      }
    }
  }
</script>

<style scoped>
  .WeatherWidget {
    text-align: center;
    margin: 0 auto;
  }

  .TownSelector > select {
    width: 80%;
    background-color: white;
    border: 0;
    border-radius: 0.75em;
    height: 2.5em;
    padding-left: 1em;
    margin: 0.25em;
  }

  .TownSelector > button {
    background-color: #5555DD;
    color: white;
    font-size: 1.2em;
    border: none;
    border-radius: 0.75em;
    margin: 0.5em;
    padding: 0.5em;
  }

  .WeatherWidget > div {
    text-align: center;
    background-color: #CCCCCC;
    width: 70%;
    margin: 1em auto;
    padding: 1em;
    border-radius: 5px;
}
</style>
