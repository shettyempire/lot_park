'use strict';

const mapInput = (receivedCmd) =>{
    switch (receivedCmd) {
        case 'create_parking_lot':
            return 'create';
        case 'park':
            return 'carEntry';
        case 'leave':
            return 'carExit';
        case 'status':
            return 'getStatus';
        case 'registration_numbers_for_cars_with_colour':
            return 'getCarsFromColor';
        case 'slot_numbers_for_cars_with_colour':
            return 'getSlotsFromColor';
        case 'slot_number_for_registration_number':
            return 'getSlotFromCar';
        default:
          return 'Invalid Input';
      }
};

exports.getCommand = function(cmd, callback){
    return callback(null, mapInput(cmd));
};

exports.mapInput = mapInput;
