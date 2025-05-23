const express= require('express');
const router= express.Router();
const { createCampaign, getAllCampaigns, getLoginUserCampaigns } = require('../../controllers/compaign/index');
const { authenticate } = require('../../middleware/auth-middleware');

router.post("/create-campaign",authenticate,  createCampaign);
router.get("/get-all-campaigns", authenticate, getAllCampaigns);
router.get("/get-login-user-campaigns", authenticate, getLoginUserCampaigns);

// router.get("/get-single-campaign/:id", authenticate, getSingleCampaign);
// router.put("/update-campaign/:id", authenticate, updateCampaign);
// router.delete("/delete-campaign/:id", authenticate, deleteCampaign);

module.exports= router