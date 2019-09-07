'use strict';

const mapInput = (receivedCmd) =>{
    switch (receivedCmd) {
        case 'create_parking_lot':
            return 'createParkingLot';
        case 'park':
            return 'carEntry';
        case 'leave':
            return 'carExit';
        case 'status':
            return 'getParkingStatus';
        case 'registration_numbers_for_cars_with_colour':
            return 'getCarsForParticularColor';
        case 'slot_numbers_for_cars_with_colour':
            return 'getSlotsForParticularColor';
        case 'slot_number_for_registration_number':
            return 'getSlotForParticularCar';
        default:
          return 'Invalid Input';
      }
};

exports.getCommand = function(cmd, callback){
    return callback(null, mapInput(cmd));
};

exports.mapInput = mapInput;
