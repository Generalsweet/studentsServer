import mongoose from "mongoose"

const {Schema,model}=mongoose;


const studentSchema=Schema({

    first_name:{
        type:String,
        
    },

     last_name:{
        type: String,

    },
    school:{
        type: String,

    },
    date_of_birth:{
        type:String
    }
})


const STUDENTMODEL=model("StudentDetails",studentSchema)


export default STUDENTMODEL
