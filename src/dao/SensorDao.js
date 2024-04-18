import Sensor from "../model/SensorModel.js";

const SensorDao = {};

SensorDao.getAll = async () => {    
    const sensor = await Sensor.find();
    console.log(sensor);

    return sensor;
}

SensorDao.insert = async (sensor) => {
    const newSensor = new Sensor(sensor);
    await newSensor.save();
}

export default SensorDao;