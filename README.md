![Orbit Logo](https://github.com/emilyloggins/orbit-capstone/blob/master/src/img/logo/OrbitLogo1.png?raw=true "Orbit Logo")
# Afraid of extraterrestrials? This is for you.
Orbit is the one stop shop for alien enthusiasts to survive an invasion. Prepare your virtual survival pack to keep track of your arsenal, connect and share evidence with like-minded people, and find transportation out of your city upon an attack.


# To Get Started
![gif](https://media.giphy.com/media/eKPFMehGvHFNkCYPmU/giphy.gif)

1. Create your own Firebase Project
* Google Console
* Start New Project
* Click the </> icon under "Get started by adding Firebase to your app"
* Name you app to get access to you Firebase SDK
* Navigate to the config.TEMPLATE.js and input your information
2. Obtain your API keys 
(this feature is optional, yet recommended)
* Google Geocoding API: https://developers.google.com/maps/documentation/geocoding/get-api-key
  * Acquire API KEY
* Public Transit API: https://developer.here.com/plans?create=Freemium-Basic&keepState=true&step=account
  * Create an account
  * Aqcuire APP ID and APP CODE
* Navigate to the keys.TEMPLATE.js and input your information

3. Open your terminal, navigate to the directory you would like to save this project, and run the command

```git clone git@github.com:emilyloggins/orbit-capstone.git```

4. Run npm install to git all the node dependencies
5. Navigate to the API folder to start the JSON server on port 8088

  ``json-server -p 8088 -w database.json``
  
6. In the orbit directory, run 

```npm start```
* If project doesn't immediately run, open http://localhost:3000 to view it in the browser.

# Entity Relationship Diagram
![Orbit ERD](https://github.com/emilyloggins/orbit-capstone/blob/master/src/img/ERD.png)
