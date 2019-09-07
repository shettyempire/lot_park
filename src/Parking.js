'use strict';

const Car = require('./Car');

function ParkingLot(){
    this.totalSlots, 
    this.parkingSlot = {};
}

//Create New ParkingLot
ParkingLot.prototype.createParkingLot = function(slots){
    if(!slots || slots < 0) {
        return 'Invalid number of slots';
    }

    this.totalSlots = slots;
    let i = 1;
    this.parkingSlot = {};
    while(i <= slots){
        this.parkingSlot[i] = 0;
        i++;
    }
    return 'Created a parking lot with ' + slots + ' slots';
}

//Park a given car
ParkingLot.prototype.carEntry = function (regNo, color) {
    if(!this.totalSlots) {
        return 'Create the Parking Lot first';
    }
    let i, slotFound = false;
    let car = new Car(regNo, color);
    for(i = 1; i <= Object.keys(this.parkingSlot).length; i++){
        if(!this.parkingSlot[i]){
        //Assign this slot to the car
        this.parkingSlot[i] = car;
        slotFound = true;
        break;
        }
    }
    return slotFound ? 'Allocated slot number: ' + i : 'Sorry, parking lot is full';
};

//Exit a given car
ParkingLot.prototype.carExit = function (slot) {
    if(!this.parkingSlot[slot]) {
        return 'Not found';
    }
    this.parkingSlot[slot] = 0;
    return 'Slot number ' + slot + ' is free';
};

//Get current status of ParkingLot
ParkingLot.prototype.getParkingStatus = function () {
    let statusString = 'Slot No. \tRegistration No \tColour';
    for(var i = 1; i <= Object.keys(this.parkingSlot).length; i++){
        if(this.parkingSlot[i]){
        statusString += '\n' + i + '\t\t' + this.parkingSlot[i].regNo + '\t\t' + this.parkingSlot[i].color;
        }
    }
    return statusString;
};

//Get cars of given color
ParkingLot.prototype.getCarsForParticularColor = function (color) {
    let carNumList = [];
    for(var i = 1; i <= Object.keys(this.parkingSlot).length; i++){
        if(this.parkingSlot[i] && this.parkingSlot[i].color.toUpperCase() === color.toUpperCase()){
        carNumList.push(this.parkingSlot[i].regNo);
        }
    }
    return carNumList.length ? carNumList.join(', ') : 'Not found';
};

//Get slot of given car
ParkingLot.prototype.getSlotForParticularCar = function (carRegNo) {
    let i, slotFound = false;
    for(i = 1; i <= Object.keys(this.parkingSlot).length; i++){
        if(this.parkingSlot[i] && this.parkingSlot[i].regNo === carRegNo){
        slotFound = true;
        break;
        }
    }
    return slotFound ? i : 'Not found';
};

//Get slots of given color
ParkingLot.prototype.getSlotsForParticularColor = function (color) {
    let carSlotList = [];
    for(var i = 1; i <= Object.keys(this.parkingSlot).length; i++){
        if(this.parkingSlot[i] && this.parkingSlot[i].color.toUpperCase() === color.toUpperCase()){
        carSlotList.push(i);
        }
    }
    return carSlotList.length ? carSlotList.join(', ') : 'Not found';
};

module.exports = ParkingLot;
