console.log('Vue.js');
/// Create a new Vue app

const app = Vue.createApp({
  /// Define the data for the app
    data (){
        return {
            profile1: 'Random User',
            user: {
                first_name: '',
                last_name: '',
                avatar_url: '',
                age: ''

            },
            firstName: 'Emmanuel',
            lastName: 'Adeoye',
            studentNumber: 1215048,
            
            

            profile2: 'Weather',
            city:'London',
            province: 'Ontario',
            country: 'Canada',
            weather: {
                temperature:  '',
                wind_speed: '',
                weather_description: '',
            },

           

            profile3: 'Dictionary',
            dataWord: {
                word:  '',
                phonetic: '',
                definition: '',
            },
            wordSearch: ''
        

        };

      
        
    },
    
    /// Define the computed for the app
    computed: {
        fullName(){
            
            return `${this.firstName} ${this.lastName}`;
        },
        

    },

    /// Define the methods for the app
     methods: {
    fetchRandomUser() {
      fetch('https://comp6062.liamstewart.ca/random-user-data')
        .then(response => {
              return response.json();
        })
        .then(data => {
          this.user = data.user_profile;
        })
        .catch(error => {
          console.log(error); 
        });
    },

    fetchWeather() {  
      fetch(`https://comp6062.liamstewart.ca/weather-data?city=${this.city}&province=${this.province}&country=${this.country}`)
        .then(response => {
              return response.json();
        })
        .then(data => {
          this.weather = data.weather_data;
        })
        .catch(error => {
          console.log( error); 
        });
    },

    fetchDictionary() {
      fetch('https://comp6062.liamstewart.ca/api/define?word=Bottle')
        .then(response => {
            return response.json();
        })
        .then(data => {
          this.dataWord.word = data.word;
          this.dataWord.phonetic = data.phonetic;
          this.dataWord.definition = data.definition;
        })
        .catch(error => {
          console.log(error); 
        });
    }
  }
});

/// Mount the Vue app to the div with id "app"
app.mount ('#app');