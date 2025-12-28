import Education from '../models/education.model.js';

// ADD EDUCATION - POST
const addEducation = async (req, res) => {
  try {
    const { title, institution, startYear, endYear, grade, description } =
      req.body;

    const education = await Education.create({
      title,
      institution,
      startYear,
      endYear,
      grade,
      description,
    });

    res.status(201).json({
      success: true,
      message: 'EDUCATION ADDED SUCCESSFULLY',
      data: education,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'ADDING EDUCATION FAILED',
      error: error.message,
    });
  }
};

// SHOW ALL EDUCATION - GET
const showAllEducation = async (req, res) => {
  try {
    const educationList = await Education.find().sort({ startYear: -1 });

    res.status(200).json({
      success: true,
      message: 'EDUCATION LIST FETCHED SUCCESSFULLY',
      data: educationList,
    });
    console.log(educationList.title, educationList.institution);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'FETCHING EDUCATION LIST FAILED',
      error: error.message,
    });
  }
};

// UPDATE EDUCATION - PUT
const updateEducation = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedEducation = await Education.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedEducation) {
      return res.status(404).json({
        success: false,
        message: 'EDUCATION NOT FOUND',
      });
    }

    res.status(200).json({
      success: true,
      message: 'EDUCATION UPDATED SUCCESSFULLY',
      data: updatedEducation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'UPDATING EDUCATION FAILED',
      error: error.message,
    });
  }
};

const deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEducation = await Education.findByIdAndDelete(req.params.id);

    if (!deletedEducation) {
      return res.status(404).json({
        success: false,
        message: 'EDUCATION NOT FOUND FOR DELETING',
      });
    }
    res.status(200).json({
      success: true,
      message: 'EDUCATION DELETED SUCCESSFULLY',
      data: deletedEducation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'DELETING EDUCATION FAILED',
      error: error.message,
    });
  }
};

const EducationController = {
  addEducation,
  showAllEducation,
  updateEducation,
  deleteEducation,
};

export default EducationController;
