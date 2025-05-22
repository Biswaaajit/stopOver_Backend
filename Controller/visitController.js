import { visitModel } from "../Model/visitModel.js";

export async function getVisitDataById(req, res) {
  try {
    const { id } = req.params;
    const data = await visitModel.find({ userId: id });
    return res.status(200).json({ data });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server issue", error: err });
  }
}

// adding visited data

export async function addData(req, res) {
  try {
    const { userId, country, cityName, position, notes, countryCode, date } =
      req.body;
    const newData = await visitModel.create({
      userId,
      country,
      cityName,
      position,
      notes,
      countryCode,
      date,
    });
    return res
      .status(201)
      .json({ message: "Your travel tale just got a new location!", newData });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server issue", error: err });
  }
}

// deleting visited Data

export async function deleteData(req, res) {
  try {
    const { id } = req.params;
    const deletedData = await visitModel.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Travel memory discarded successfully", deletedData });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server issue", error: err });
  }
}

//getting visit data through its id

export async function getDataById(req, res) {
  try {
    const { id } = req.params;
    const data = await visitModel.findById(id);
    return res.status(200).json(data);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server issue", error: err });
  }
}
