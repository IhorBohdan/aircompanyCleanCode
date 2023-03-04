import PassengerPlane from './planes/PassengerPlane';
import MilitaryPlane from './planes/MilitaryPlane';
import MilitaryType from './models/militaryType';
import ExperimentalPlane from './planes/ExperimentalPlane';

class Airport {

  constructor(planes) {
    this.planes = planes;
  };

  getPlanes() {
    return this.planes;
  };

  getPlanesByType(type) {
    const planesByType = [];
    this.planes.forEach(plane => {
      if (plane instanceof type) {
        planesByType.push(plane);
      }
    });
    return planesByType;
  };

  getPassengerPlanes() {
    return this.getPlanesByType(PassengerPlane);
  };

  getMilitaryPlanes() {
    return this.getPlanesByType(MilitaryPlane);
  };

  getTransportMilitaryPlanes() {
    return this.getPlanesByType(MilitaryPlane).filter(plane => plane.getMilitaryType() === MilitaryType.transport);
  };

  getBomberMilitaryPlanes() {
    return this.getPlanesByType(MilitaryPlane).filter(plane => plane.getMilitaryType() === MilitaryType.bomber);
  };

  getExperimentalPlanes() {
    return this.getPlanesByType(ExperimentalPlane);
  };

  getPlaneWithMaxPassengersCapacity() {
    const passengerPlanes = this.getPassengerPlanes();
    return passengerPlanes.reduce((maxCapacityPlane, currentPlane) => maxCapacityPlane.getPassengersCapacity() > currentPlane.getPassengersCapacity() ? maxCapacityPlane : currentPlane);
  };

  sortByMaxDistance() {
    this.planes.sort((a, b) => a.getMaxFlightDistance() - b.getMaxFlightDistance());
    return this;
  };

  sortByMaxSpeed() {
    this.planes.sort((a, b) => a.getMaxSpeed() - b.getMaxSpeed());
    return this;
  };

  sortByMaxLoadCapacity() {
    this.planes.sort((a, b) => a.getMinLoadCapacity() - b.getMinLoadCapacity());
    return this;
  };

  static printListOfPlanes(planes) {
    return JSON.stringify(planes);
  };

}

export default Airport;
