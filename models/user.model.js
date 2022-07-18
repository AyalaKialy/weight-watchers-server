const mongoose=require('mongoose');
const {Schema}=mongoose;
const meetingSchema=require('meeting.model');
const diarySchema=require('diary.model');

const userSchema=new mongoose.Schema({
    id:String,
    firstName:String,
    lastName:String,
    city:String,
    street:String,
    number:Number,
    phone:String,
    email:{
        type:String,
        unique: true,
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'Please fill a valid email address']
    },
    height:Number,
    weight: [{
        startWeight: { type: number },
        meetings: [{
            // id: {
            //     type: mongoose.Schema.Types.ObjectId,
            //     ref: 'meeting'
            // }
            type: [meetingSchema]
        }]
    }],
    diary:diarySchema
 })

module.exports=mongoose.model('user',userSchema)