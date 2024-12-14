#include <DHT.h>
#define DHTPIN 2 // Change this to the pin connected to the DHT sensor
#define PELTIERPIN 8 // Change this to the pin connected to the Peltier module

const int thresholdTemp = 25; // Temperature in Celsius to activate Peltier module
 // Time in seconds to activate Peltier module

DHT dht(DHTPIN, DHT11); // Replace DHT11 with DHT22 if using a different sensor model
int currentTemp;
int currenthum;

void setup() {
  Serial.begin(9600);
  dht.begin();  
  pinMode(PELTIERPIN, OUTPUT);
  digitalWrite(PELTIERPIN, 1);
}

void loop() {
  // Read temperature and solar panel voltage
  currentTemp = dht.readTemperature();
  currenthum  =dht.readHumidity();
  if (isnan(currentTemp) ||isnan(currenthum)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  if (currentTemp > thresholdTemp) {
//    digitalWrite(PELTIERPIN, HIGH);
    digitalWrite(PELTIERPIN, 0);
  } else {
    digitalWrite(PELTIERPIN, 1);
  }
  Serial.print("Temperature: ");
  Serial.print(currentTemp);
  Serial.print(",  Humidity");
  Serial.print(currenthum);
  Serial.println();
  
  delay(1000); 
}
