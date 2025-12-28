import Service from '../models/service.model.js';

const addService = async (req, res) => {
  try {
    const { title, description, img } = req.body;

    const service = await Service.create({
      title,
      description,
      img,
    });

    res.status(201).json({
      success: true,
      message: 'SERVICE ADDED SUCCESSFULLY',
      data: service,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'FAILED TO ADD SERVICE',
      error: error.message,
    });
  }
};

const showAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: 'SERVICES FETCHED SUCCESSFULLY',
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'FAILED TO FETCH SERVICES',
      error: error.message,
    });
  }
};

const updateService = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedService = await Service.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedServices) {
      return res.status(404).json({
        success: false,
        message: 'SERVICE NOT FOUND',
      });
    }

    res.status(200).json({
      success: true,
      message: 'SERVICE UPDATED SUCCESSFULLY',
      data: updatedEducation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'UPDATING SERVICE FAILED',
      error: error.message,
    });
  }
};

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedService = await Service.findByIdAndDelete(req.params.id);

    if (!deletedService) {
      return res.status(404).json({
        success: false,
        message: 'SERVICE NOT FOUND FOR DELETING',
      });
    }
    res.status(200).json({
      success: true,
      message: 'SERVICE DELETED SUCCESSFULLY',
      data: deletedEducation,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'DELETING SERVICE FAILED',
      error: error.message,
    });
  }
};

const ServiceController = {
  addService,
  showAllServices,
  updateService,
  deleteService,
};

export default ServiceController;
