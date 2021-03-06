const express =require('express')
const app =express ()
const GoogleStrategy = require ('passport-google-oauth20').Strategy
const passport = require ('passport')
const keys =require('./config/keys')
 
passport .use(
    new GoogleStrategy({
        clientID:keys.googleClientID,
        clientSecret:keys.googleCLientSecret,
        callbackURL:"/auth/google/callback"
    },
    
    (accessToken, refreshToken, profile, done)=>{
        console.log('accessToken',accessToken)
        console.log('refreshToken',refreshToken)
        console.log('profile', profile)
        console.log('done', done)
    }),
)
app.get('/auth/google', passport.authenticate('google',{
    scope:['profile','email']
}))

app.get("/auth/google/callback" , passport.authenticate('google'))
const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{console.log('ser ver statted on port 5000')})