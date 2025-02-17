import Survey from "../model/surveyModel.js";

// // Submit survey
// export const submitSurvey = async (req, res) => {
//   try {
//     const { basicInfo, relationshipPreferences, personalityInterests, datingPreferences } = req.body;

//     const survey = new Survey({
//       userId: req.user.id, // Attach the user ID from the authenticated user
//       basicInfo,
//       relationshipPreferences,
//       personalityInterests,
//       datingPreferences,
//     });

//     await survey.save();
//     res.status(201).json({ message: 'Survey submitted successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

export const submitSurvey = async (req, res) => {
  try {
    if (!req.user || !req.user.userId) {
      return res.status(401).json({ message: "Unauthorized: User ID is missing" });
    }

    const { basicInfo, relationshipPreferences, personalityInterests, datingPreferences } = req.body;

    const survey = new Survey({
      userId: req.user.userId, // Ensure userId is correctly passed
      basicInfo,
      relationshipPreferences,
      personalityInterests,
      datingPreferences,
    });

    await survey.save();
    res.status(201).json({ message: "Survey submitted successfully!" });
  } catch (error) {
    console.error("Error submitting survey:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// Get survey by user ID
export const getSurveyByUserId = async (req, res) => {
  try {
    if (!req.user || !req.user.userId) {
      return res.status(401).json({ message: "Unauthorized: User ID is missing" });
    }
    
    const survey = await Survey.findOne({ userId: req.user.userId });
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }
    res.status(200).json(survey);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// import Survey from "../model/surveyModel.js";

// export const submitSurvey = async (req, res) => {
//   try {
//     if (!req.user || !req.user.id) {
//       return res.status(401).json({ message: "Unauthorized: User ID is missing" });
//     }

//     const { basicInfo, relationshipPreferences, personalityInterests, datingPreferences } = req.body;

//     const survey = new Survey({
//       userId: req.user.id, // Ensure userId is correctly passed
//       basicInfo,
//       relationshipPreferences,
//       personalityInterests,
//       datingPreferences,
//     });

//     await survey.save();
//     res.status(201).json({ message: "Survey submitted successfully!" });
//   } catch (error) {
//     console.error("Error submitting survey:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };
