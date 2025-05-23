const Campaign = require('../../models/Campaign');

// Create Campaign Controller
const createCampaign = async (req, res) => {
 
  try {
    const {
      aadharImageUrl,
      accountHolderName,
      accountNumber,
      address,
      addressDetails,
      agreeAll,
      agreePayment,
      agreePrivacy,
      agreeTerms,
      bankName,
      beneficiaryDateOfBirth,
      campaignTitle,
      category,
      country,
      currency,
      dateOfBirth,
      district,
      email,
      emailId,
      emailOfImamSahab,
      endDate,
      familyName,
      featureImageUrl,
      fullNameAsPerAadhar,
      fundType,
      gender,
      givenName,
      goalAmount,
      governmentIdUrl,
      ifscCode,
      isBeneficiaryOrphan,
      isUrgent,
      location,
      maritalStatus,
      mobileNumber,
      masjidName,
      numberOfBeneficiaries,
      numberOfImamSahab,
      panImageUrl,
      phone,
      pincode,
      raisingCause,
      state,
      story,
      tagline,
      zakatVerified,

    } = req.body;

    const newCampaign = new Campaign({
      aadharImageUrl,
      accountHolderName,
      accountNumber,
      address,
      addressDetails,
      agreeAll,
      agreePayment,
      agreePrivacy,
      agreeTerms,
      bankName,
      beneficiaryDateOfBirth,
      campaignTitle,
      category,
      country,
      currency,
      dateOfBirth,
      district,
      email,
      emailId,
      emailOfImamSahab,
      endDate,
      familyName,
      featureImageUrl,
      fullNameAsPerAadhar,
      fundType,
      gender,
      givenName,
      goalAmount,
      governmentIdUrl,
      ifscCode,
      isBeneficiaryOrphan,
      isUrgent,
      location,
      maritalStatus,
      mobileNumber,
      masjidName,
      numberOfBeneficiaries,
      numberOfImamSahab,
      panImageUrl,
      phone,
      pincode,
      raisingCause,
      state,
      story,
      tagline,
      zakatVerified,
      createdBy: req.user.id
    });

    await newCampaign.save();

    res.status(201).json({
      success: true,
      message: 'Campaign created successfully',
      data: newCampaign,
  
    });
    return newCampaign;
  } catch (error) {
    console.error('Campaign creation error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to create campaign',
      error: error.message,
    });
    return error.message;
  }
};

const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json({
      success: true,
      message: 'Campaigns fetched successfully',
      data: campaigns,
    });
  } catch (error) {
    console.error('Error fetching campaigns:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch campaigns',
      error: error.message,
    });
  }
};

const getLoginUserCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({ createdBy: req.user.id });
    res.status(200).json({
      success: true,
      message: 'Campaigns fetched successfully',
      data: campaigns,
    });
  } catch (error) {
    console.error('Error fetching campaigns:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch campaigns',
      error: error.message,
    });
  }
};


module.exports = {
  createCampaign,
  getAllCampaigns,
  getLoginUserCampaigns,
};