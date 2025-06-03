const mongoose = require("mongoose");
const BusinessSchema=new mongoose.Schema({
    businessType: String,
    targetAudience: String,
    sellingPoint: String,
    templateSelection: String,
});

const Business=mongoose.model("Business", BusinessSchema);
module.exports=Business;