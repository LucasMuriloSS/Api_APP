import {connect} from 'mongoose'
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
module.exports = connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.yimfiib.mongodb.net/test`)