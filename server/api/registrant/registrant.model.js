'use strict';
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  autoIncrement = require('mongoose-auto-increment');
  autoIncrement.initialize(mongoose);

var prop = {
    fname: String,
    lname: String,
    email: String,
    address: String,
    mobile: String,

};

var key  = 'Registrant'.concat('_id').toLowerCase();
      prop [key] = {
        type: Schema.Types.ObjectId,
        ref: 'Registrant'
      };

var RegistrantSchema = new Schema(prop);

RegistrantSchema.plugin(autoIncrement.plugin,
              {model:'Registrant',
                field : key.toString(),
                startAt:1

              }
  );


module.exports = mongoose.model('Registrant', RegistrantSchema);
