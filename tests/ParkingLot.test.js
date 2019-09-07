"use strict";

const expect = require('chai').expect;
const Car = require('../src/Car'),
ParkingLot = require('../src/Parking');

let parking, regNos, colors;
describe('Parking Lot testing', function () {
  //runs before all tests in this block and assigns value
    before(function() {
        parking = new ParkingLot();
        parking.createParkingLot(7);
        regNos = [
            'KA-01-7788',
            'KA-19-8899',
            'KA-21-2244',
            'KA-14-5566',
            'KA-02-9999',
            'KA-16-2212',
            'KA-18-4334',
            'KA-10-6543'
        ];
        colors = [
            'BLACK',
            'WHITE',
            'GREY',
            'BLUE',
            'WHITE',
            'BLUE',
            'SILVER',
            'YELLOW'
        ];
    });

    describe('Create New Parking Lot with predefined slots', function () {
        it('Should create a new ParkingLot instance with 7 slots and return the message', function () {
            let resp = parking.createParkingLot(7);
            expect(resp).to.equal('Created a parking lot with 7 slots');
        });
    });

    describe('Assign slot to car1', function () {
        it('Should assign first slot to the input car', function () {
            let resp = parking.carEntry(regNos[0], colors[0]);
            expect(resp).to.equal('Allocated slot number: 1');
        });
    });

    describe('Assign slot to car2', function () {
        it('Should assign second slot to the input car', function () {
            let resp = parking.carEntry(regNos[1], colors[1]);
            expect(resp).to.equal('Allocated slot number: 2');
        });
    });

    describe('Exit car from Parking Lot', function () {
        it('Should free the first slot from Parking Lot', function () {
        let resp = parking.carExit(1);
        expect(resp).to.equal('Slot number 1 is free')
        });
    });

    describe('Assign slot to car3', function () {
        it('Should assign first slot to the input car', function () {
            let resp = parking.carEntry(regNos[2], colors[2]);
            expect(resp).to.equal('Allocated slot number: 1');
        });
    });

    describe('Overload ParkingLot', function () {
        it('Should return error message since the parking lot is already full', function () {
            parking.carEntry(regNos[3], colors[3]);
            parking.carEntry(regNos[4], colors[4]);
            parking.carEntry(regNos[5], colors[5]);
            parking.carEntry(regNos[6], colors[6]);
            parking.carEntry(regNos[7], colors[7]);
            let resp = parking.carEntry(regNos[0], colors[0]);
            expect(resp).to.equal('Sorry, parking lot is full');
        });
    });

    describe('Get all cars of color', function () {
        it('Should return all cars of matching color with given color', function () {
            let resp = parking.getCarsForParticularColor('WHITE');
            expect(resp).to.equal('KA-19-8899, KA-02-9999');
        });
    });

    describe('Get slot number of car', function () {
        it('Should return the slot number for given car', function () {
            let resp = parking.getSlotForParticularCar('KA-21-2244');
            expect(resp).to.equal(1);
        });
    });

    describe('Get slot number of car not in parking lot', function () {
        it('Should return error message if car not found', function () {
            let resp = parking.getSlotForParticularCar('GA-03-1234');
            expect(resp).to.equal('Not found');
        });
    });

    describe('Get all slots of color', function () {
        it('Should return all slots of matching color with given color', function () {
            let resp = parking.getSlotsForParticularColor('BLUE');
            expect(resp).to.equal('3, 5');
        });
    });

});
